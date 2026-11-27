import { lerFichaSalva } from "../services/ficha-storage.js";
import {
    adicionarAnotacao,
    carregarAnotacoes
} from "../ui/anotacoes.js";

document.addEventListener("DOMContentLoaded", () => {
    const ficha = lerFichaSalva();
    carregarAnotacoes(ficha?.anotacoes);

    document
        .getElementById("adicionar-anotacao")
        .addEventListener("click", () => adicionarAnotacao());
});
