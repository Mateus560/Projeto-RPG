import origens from "../../data/origens.js";
import classes from "../../data/classes.js";
import almas from "../../data/almas.js";
import periciasDisponiveis from "../../data/pericias.js";

import { exportarFicha, importarFicha } from "../services/ficha-backup.js";
import {
    carregarPericiasIniciais,
    carregarPericiasOrigem,
    criarSlotsPericias
} from "../domain/pericias.js";
import { adicionarHabilidade } from "../ui/habilidades.js";
import {
    alterarRecurso,
    limitarRecursoAtual,
    receberCura,
    receberDano
} from "../domain/recursos.js";
import { atualizarAlma } from "../ui/alma.js";
import { carregarProficienciasClasse } from "../ui/proficiencias.js";
import { fecharAlerta } from "../ui/alertas.js";
import {
    adicionarArma,
    adicionarItem,
    atualizarInventario
} from "../domain/inventario.js";
import { calcularStatus } from "../domain/status.js";
import { carregarFicha, salvarFicha } from "../ui/ficha.js";
import { lerFichaSalva } from "../services/ficha-storage.js";

const obterElemento = id => document.getElementById(id);

function preencherLista(id, opcoes) {
    const lista = obterElemento(id);
    if (!lista) return;

    lista.replaceChildren();
    opcoes.forEach(valor => {
        const option = document.createElement("option");
        option.value = valor;
        lista.appendChild(option);
    });
}

function preencherAtributo(id) {
    const campo = obterElemento(id);
    if (!campo) return;

    campo.replaceChildren();
    for (let valor = 0; valor <= 5; valor++) {
        const option = document.createElement("option");
        option.value = valor;
        option.textContent = valor;
        option.selected = valor === 1;
        campo.appendChild(option);
    }
}

function inicializarListas() {
    preencherLista("lista-pericias-disponiveis", periciasDisponiveis);
    preencherLista("lista-classes", Object.keys(classes));
    preencherLista("lista-origens", Object.keys(origens));
    preencherLista("lista-almas", Object.keys(almas));

    ["forca", "agilidade", "resistencia", "conhecimento", "influencia"]
        .forEach(preencherAtributo);
}

function atualizarTrilhasDaClasse() {
    const campoClasse = obterElemento("classe");
    const campoTrilha = obterElemento("trilha");
    const listaTrilhas = obterElemento("lista-trilhas");
    const classe = classes[campoClasse.value];

    listaTrilhas.replaceChildren();
    campoTrilha.value = "";

    if (!classe) {
        campoTrilha.disabled = true;
        obterElemento("lista-pericias").replaceChildren();
        obterElemento("pericias-iniciais").replaceChildren();
        obterElemento("lista-proficiencias").replaceChildren();
        return;
    }

    Object.keys(classe.trilhas).forEach(nome => {
        const option = document.createElement("option");
        option.value = nome;
        option.textContent = nome;
        listaTrilhas.appendChild(option);
    });

    campoTrilha.disabled = false;
    calcularStatus();
    carregarPericiasIniciais();
    criarSlotsPericias();
    carregarProficienciasClasse();
}

function vincularEventosDaFicha() {
    obterElemento("alma").addEventListener("change", atualizarAlma);
    obterElemento("origem").addEventListener("change", () => carregarPericiasOrigem());
    obterElemento("classe").addEventListener("change", atualizarTrilhasDaClasse);

    ["epeem", "resistencia", "influencia"].forEach(id =>
        obterElemento(id).addEventListener("input", calcularStatus)
    );
    obterElemento("conhecimento").addEventListener("input", criarSlotsPericias);
    obterElemento("forca").addEventListener("input", atualizarInventario);

    obterElemento("adicionar-habilidade").addEventListener("click", () => adicionarHabilidade());
    obterElemento("adicionar-arma").addEventListener("click", adicionarArma);
    obterElemento("adicionar-item").addEventListener("click", adicionarItem);
    obterElemento("entendi").addEventListener("click", fecharAlerta);

    obterElemento("pv-dano").addEventListener("click", () => receberDano("vida-atual", "dano-pv"));
    obterElemento("sanidade-dano").addEventListener("click", () => receberDano("sanidade-atual", "dano-sanidade"));
    obterElemento("pv-cura").addEventListener("click", () => receberCura("vida-atual", "cura-pv"));
    obterElemento("sanidade-cura").addEventListener("click", () => receberCura("sanidade-atual", "cura-sanidade"));

    [
        ["aumentar-pv", "vida-atual", 1], ["diminuir-pv", "vida-atual", -1],
        ["aumentar-pe", "pe-atual", 1], ["diminuir-pe", "pe-atual", -1],
        ["aumentar-sanidade", "sanidade-atual", 1], ["diminuir-sanidade", "sanidade-atual", -1]
    ].forEach(([botao, recurso, variacao]) => {
        obterElemento(botao).addEventListener("click", () => alterarRecurso(recurso, variacao));
    });

    obterElemento("salvar-ficha").addEventListener("click", salvarFicha);
    obterElemento("carregar-ficha").addEventListener("click", carregarFicha);
    obterElemento("exportar-ficha").addEventListener("click", exportarFicha);

    const arquivoFicha = obterElemento("arquivo-ficha");
    obterElemento("importar-ficha").addEventListener("click", () => arquivoFicha.click());
    arquivoFicha.addEventListener("change", async () => {
        await importarFicha(arquivoFicha.files[0]);
        arquivoFicha.value = "";
    });

    obterElemento("poderes-trilha").addEventListener("click", () => {
        localStorage.setItem("trilha-selecionada", JSON.stringify({
            classe: obterElemento("classe").value,
            trilha: obterElemento("trilha").value
        }));
        window.location.href = "./trilha.html";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarListas();
    ["vida-atual", "pe-atual", "sanidade-atual"].forEach(limitarRecursoAtual);
    vincularEventosDaFicha();

    atualizarInventario();
    calcularStatus();

    if (lerFichaSalva()) carregarFicha();
});
