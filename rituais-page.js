import { 
    adicionarRitual,
    carregarRituais
} from "./modules/rituais.js";

document.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("adicionar-ritual")
        .addEventListener(
            "click",
            adicionarRitual,
        );
    carregarRituais();
});