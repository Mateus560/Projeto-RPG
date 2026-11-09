import { 
    adicionarRitual,
    carregarRituais
} from "../ui/rituais.js";

document.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("adicionar-ritual")
        .addEventListener(
            "click",
            adicionarRitual,
        );
    carregarRituais();
});
