import classes from "../../data/classes.js";
import { calcularStatusBase } from "../domain/status.js";
import { limitarRecursoAtual } from "../domain/recursos.js";
import { lerFichaSalva, gravarDadosFicha } from "../services/ficha-storage.js";
import {
    adicionarHabilidade,
    carregarHabilidades
} from "../ui/habilidades.js";
import { fecharAlerta } from "../ui/alertas.js";

function inicializarPontosDeEsforco(ficha) {
    const dadosClasse = classes[ficha?.classe];
    let peMaximo = 0;

    if (dadosClasse) {
        peMaximo = calcularStatusBase(
            dadosClasse,
            Number(ficha.epeem) || 0,
            Number(ficha.atributos?.resistencia) || 0,
            Number(ficha.atributos?.influencia) || 0
        ).pe;
    }

    const campoPE = document.getElementById("pe-atual");
    document.getElementById("pe-max").textContent = peMaximo;
    campoPE.value = Math.min(
        Math.max(0, Number(ficha?.recursos?.pe) || 0),
        peMaximo
    );

    limitarRecursoAtual("pe-atual");
    campoPE.addEventListener("input", () => {
        const fichaAtual = lerFichaSalva();
        if (!fichaAtual) return;

        gravarDadosFicha({
            recursos: {
                ...fichaAtual.recursos,
                pe: campoPE.value
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const ficha = lerFichaSalva();
    inicializarPontosDeEsforco(ficha);
    carregarHabilidades(ficha?.habilidades || []);

    document
        .getElementById("adicionar-habilidade")
        .addEventListener("click", () => adicionarHabilidade());
    document
        .getElementById("entendi")
        .addEventListener("click", fecharAlerta);
});
