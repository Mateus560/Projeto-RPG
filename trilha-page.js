import { obterTrilha } from "./modules/trilhas.js";
import { renderizarTrilha } from "./modules/cards-trilhas.js";

const listaTrilha = document.getElementById("lista-trilha");

const dados = JSON.parse(
    localStorage.getItem("trilha-selecionada")
);

if (!dados) {
    listaTrilha.innerHTML = "<p>Nenhuma trilha selecionada.</p>";
} else {
    const trilha = obterTrilha(
        dados.classe,
        dados.trilha
    );

    if (!trilha) {
        listaTrilha.innerHTML = "<p>Trilha não encontrada.</p>";
    } else {
        renderizarTrilha(
            dados.trilha,
            trilha,
            listaTrilha
        );
    }
}