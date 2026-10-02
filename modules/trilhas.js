import classes from "../data/classes.js";

export function obterTrilha(nomeClasse, nomeTrilha) {
    const classe = classes[nomeClasse];

    if (!classe) {
        return null;
    }

    return classe.trilhas[nomeTrilha] || null;
}