import { lerFichaSalva } from "../services/ficha-storage.js";
import {
    adicionarArma,
    adicionarItem,
    atualizarInventario,
    carregarArmas,
    carregarItens
} from "../domain/inventario.js";

document.addEventListener("DOMContentLoaded", () => {
    const ficha = lerFichaSalva();
    document.getElementById("forca").value = ficha?.atributos?.forca ?? 0;

    carregarArmas(ficha?.armas || []);
    carregarItens(ficha?.itens || []);

    document
        .getElementById("adicionar-arma")
        .addEventListener("click", () => adicionarArma());
    document
        .getElementById("adicionar-item")
        .addEventListener("click", () => adicionarItem());

    atualizarInventario();
});
