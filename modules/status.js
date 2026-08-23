import classes from "../data/classes.js";

export function calcularStatus() {
    const campoClasse =
        document.getElementById("classe");

    const campoEpeem =
        document.getElementById("epeem");

    const classe = campoClasse.value;

    if (!classes[classe]) return;

    const epeem =
        Number(campoEpeem.value) || 0;

    const resistencia =
        Number(
            document.getElementById("resistencia").value
        ) || 0;

    const influencia =
        Number(
            document.getElementById("influencia").value
        ) || 0;

    const dadosClasse = classes[classe];

    const progresso =
        Math.max(0, Math.floor(epeem / 5) - 1);

    const vidaMaxima =
        dadosClasse.vidaBase +
        resistencia +
        (
            progresso *
            (dadosClasse.progressao.vida + resistencia)
        );

    const peMaximo =
        dadosClasse.peBase +
        influencia +
        (
            progresso *
            (dadosClasse.progressao.pe + influencia)
        );

    const sanidadeMaxima =
        dadosClasse.sanidadeBase +
        (
            progresso *
            dadosClasse.progressao.sanidade
        );

    document.getElementById("vida-max").textContent =
        vidaMaxima;

    document.getElementById("pe-max").textContent =
        peMaximo;

    document.getElementById("sanidade-max").textContent =
        sanidadeMaxima;

    const vidaAtual =
        document.getElementById("vida-atual");

    const peAtual =
        document.getElementById("pe-atual");

    const sanidadeAtual =
        document.getElementById("sanidade-atual");

    if (Number(vidaAtual.value) > vidaMaxima) {
        vidaAtual.value = vidaMaxima;
    }

    if (Number(peAtual.value) > peMaximo) {
        peAtual.value = peMaximo;
    }

    if (Number(sanidadeAtual.value) > sanidadeMaxima) {
        sanidadeAtual.value = sanidadeMaxima;
    }
}