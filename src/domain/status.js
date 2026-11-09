import classes from "../../data/classes.js";

export function calcularStatusBase(dadosClasse, epeem, resistencia, influencia) {
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

    return {
        vida: vidaMaxima,
        pe: peMaximo,
        sanidade: sanidadeMaxima
    };
}

export function calcularStatus() {
    const classe = document.getElementById("classe")?.value;
    const dadosClasse = classes[classe];
    if (!dadosClasse) return;

    const status = calcularStatusBase(
        dadosClasse,
        Number(document.getElementById("epeem")?.value) || 0,
        Number(document.getElementById("resistencia")?.value) || 0,
        Number(document.getElementById("influencia")?.value) || 0
    );

    document.getElementById("vida-max").textContent = status.vida;
    document.getElementById("pe-max").textContent = status.pe;
    document.getElementById("sanidade-max").textContent = status.sanidade;

    for (const [recurso, maximo] of Object.entries(status)) {
        const campo = document.getElementById(`${recurso}-atual`);
        if (Number(campo.value) > maximo) campo.value = maximo;
    }
}
