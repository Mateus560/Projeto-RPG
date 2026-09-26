import classes from "../data/classes.js";

export function carregarProficienciasClasse() {
    const campoClasse = document.getElementById("classe");
    const lista = document.getElementById("lista-proficiencias");

    const classe = campoClasse.value;

    if (!lista) return;

    lista.innerHTML = "";

    if (!classes[classe]) return;

    const proficiencias =
        classes[classe].proficiencias || [];

    proficiencias.forEach(proficiencia => {
        const campo = document.createElement("div");

        campo.classList.add("proficiencia");

        campo.innerHTML = `
            <input 
                type="text"
                value="${proficiencia}"
                readonly
                class="nome-proficiencia"
            >
        `
        lista.appendChild(campo);
    });
}

export function coletarProficiencias() {
    const proficienciasCombate = [];

    document
        .querySelectorAll("#lista-proficiencias .proficiencia")
        .forEach(proficiencia => {
            proficienciasCombate.push({
                nome: proficiencia.querySelector(
                    ".nome-proficiencia"
                ).value
            });
        });
    return proficienciasCombate;
}