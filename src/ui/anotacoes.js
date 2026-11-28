import { gravarDadosFicha, lerFichaSalva } from "../services/ficha-storage.js";

function coletarAnotacoes() {
    return Array.from(
        document.querySelectorAll("#lista-anotacoes textarea"),
        campo => campo.value
    );
}

function salvarAnotacoesAutomaticamente() {
    if (!lerFichaSalva()) return;
    gravarDadosFicha({ anotacoes: coletarAnotacoes() });
}

export function adicionarAnotacao(texto = "", salvarAutomaticamente = true) {
    const lista = document.getElementById("lista-anotacoes");
    if (!lista) return;

    const anotacao = document.createElement("div");
    anotacao.classList.add("field");
    anotacao.innerHTML = `
        <textarea class="anotacao" placeholder="Escreva sua anotação..."></textarea>
        <div class="actions">
            <button type="button" class="button-remover" id="button-remover-anotacao">Remover</button>
        </div>
    `;

    const campo = anotacao.querySelector("textarea");
    campo.value = texto;
    campo.addEventListener("input", salvarAnotacoesAutomaticamente);

    anotacao.querySelector(".button-remover").addEventListener("click", () => {
        anotacao.remove();
        salvarAnotacoesAutomaticamente();
    });

    lista.appendChild(anotacao);
    if (salvarAutomaticamente) salvarAnotacoesAutomaticamente();
}

export function carregarAnotacoes(anotacoes) {
    const lista = document.getElementById("lista-anotacoes");
    if (!lista) return;

    lista.replaceChildren();

    const valores = Array.isArray(anotacoes)
        ? anotacoes
        : typeof anotacoes === "string"
            ? [anotacoes]
            : [];

    valores.forEach(texto => adicionarAnotacao(texto, false));
}
