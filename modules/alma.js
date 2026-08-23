import almas from "../data/almas.js";

export function atualizarAlma() {
    const campoAlma = document.getElementById("alma");
    const descricao = document.getElementById("descricao-alma");

    if (!campoAlma || !descricao) return;

    const almaEscolhida = campoAlma.value;
    const dados = almas[almaEscolhida];

    if (!dados) {
        descricao.hidden = true;
        return;
    }

    document.getElementById("afinidade-alma").textContent =
        dados.afinidade_elemental;

    document.getElementById("texto-alma").textContent =
        dados.descricao;

    document.getElementById("poder-alma").textContent =
        dados.poder;

    document.getElementById("antonimo-alma").textContent =
        dados.antonimo;

    descricao.hidden = false;
}