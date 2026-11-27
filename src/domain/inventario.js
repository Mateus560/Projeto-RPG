import { gravarDadosFicha, lerFichaSalva } from "../services/ficha-storage.js";

export function calcularCapacidadeInventario(forca) {
    forca = Number(forca) || 0;
    if (forca === 0) {
        return 2;
    }

    return forca * 5;
}

export function calcularEspacoInventario() {
    return calcularCapacidadeInventario(
        document.getElementById("forca")?.value
    );
}

export function calcularEspacoUsado() {
    let usado = 0;

    document
        .querySelectorAll(".espaco-inventario")
        .forEach(campo => {
            usado += Number(campo.value) || 0;
        });

    return usado;
}

export function atualizarInventario() {
    const usado = calcularEspacoUsado();
    const maximo = calcularEspacoInventario();

    const espaco =
        document.getElementById("espaco");

    if (!espaco) return;

    espaco.textContent =
        `Espaço: ${usado}/${maximo}`;
}

function salvarInventarioAutomaticamente() {
    if (!lerFichaSalva()) return;

    gravarDadosFicha({
        armas: coletarArmas(),
        itens: coletarItens()
    });
}

function vincularEventosInventario(elemento) {
    elemento.querySelector(".button-remover")
        .addEventListener("click", () => {
            elemento.remove();
            atualizarInventario();
            salvarInventarioAutomaticamente();
        });

    elemento.querySelectorAll("input, textarea").forEach(campo => {
        campo.addEventListener("input", () => {
            atualizarInventario();
            salvarInventarioAutomaticamente();
        });
    });
}

export function adicionarArma(dados = null, salvarAutomaticamente = true) {
    const lista =
        document.getElementById("lista-armas");

    if (!lista) return;

    const arma =
        document.createElement("div");

    arma.classList.add("inventory-item");

    arma.innerHTML = `
        <div class="field">
            <label>Nome da arma</label>
            <input
                class="nome-arma"
                type="text"
                placeholder="Ex: Espada longa"
            >
        </div>

            <div class="field">
                <label>Dano</label>
                <input
                    class="dano-arma"
                    type="text"
                    placeholder="Ex: 1d8"
                >
            </div>

            <div class="field">
                <label>Crítico</label>
                <input
                    class="critico-arma"
                    type="text"
                    placeholder="Ex: 19/x2"
                >
            </div>

            <div class="field">
                <label>Espaço</label>
                <input
                    type="number"
                    min="0"
                    value="1"
                    class="espaco-inventario"
                >
            </div>

            <div class="field">
                <label>Descrição</label>
                <textarea
                    class="descricao-arma"
                    placeholder="Descrição da arma"
                ></textarea>
            </div>
            <div class="actions">
                <button
                    type="button"
                    class="button-remover"
                >
                    Remover
                </button>
            </div>
    `;

    lista.appendChild(arma);

    if (dados) {
        arma.querySelector(".nome-arma").value =
            dados.nome || "";

        arma.querySelector(".dano-arma").value =
            dados.dano || "";

        arma.querySelector(".critico-arma").value =
            dados.critico || "";

        arma.querySelector(".espaco-inventario").value =
            dados.espaco ?? 1;

        arma.querySelector(".descricao-arma").value =
            dados.descricao || "";
    }

    vincularEventosInventario(arma);

    atualizarInventario();
    if (salvarAutomaticamente) salvarInventarioAutomaticamente();
}

export function adicionarItem(dados = null, salvarAutomaticamente = true) {
    const lista =
        document.getElementById("lista-itens");

    if (!lista) return;

    const item =
        document.createElement("div");

    item.classList.add("inventory-item");

    item.innerHTML = `
        <div class="field">
            <label>Nome do item</label>

            <input
                class="nome-item"
                type="text"
                placeholder="Ex: Corda"
            >
        </div>

        <div class="field">
            <label>Espaço</label>

            <input
                type="number"
                min="0"
                value="1"
                class="espaco-inventario"
            >
        </div>

        <div class="field">
            <label>Descrição</label>

            <textarea
                class="descricao-item"
            ></textarea>
        </div>

        <button
            type="button"
            class="button-remover"
        >
            Remover
        </button>
    `;

    lista.appendChild(item);

    if (dados) {
        item.querySelector(".nome-item").value =
            dados.nome || "";

        item.querySelector(".espaco-inventario").value =
            dados.espaco ?? 1;

        item.querySelector(".descricao-item").value =
            dados.descricao || "";
    }

    vincularEventosInventario(item);

    atualizarInventario();
    if (salvarAutomaticamente) salvarInventarioAutomaticamente();
}

export function coletarArmas() {
    const armas = [];

    document
        .querySelectorAll("#lista-armas .inventory-item")
        .forEach(arma => {
            armas.push({
                nome:
                    arma.querySelector(".nome-arma").value,

                dano:
                    arma.querySelector(".dano-arma").value,

                critico:
                    arma.querySelector(".critico-arma").value,

                espaco:
                    arma.querySelector(
                        ".espaco-inventario"
                    ).value,

                descricao:
                    arma.querySelector(
                        ".descricao-arma"
                    ).value
            });
        });

    return armas;
}

export function coletarItens() {
    const itens = [];

    document
        .querySelectorAll("#lista-itens .inventory-item")
        .forEach(item => {
            itens.push({
                nome:
                    item.querySelector(".nome-item").value,

                espaco:
                    item.querySelector(
                        ".espaco-inventario"
                    ).value,

                descricao:
                    item.querySelector(
                        ".descricao-item"
                    ).value
            });
        });

    return itens;
}

export function carregarArmas(armas) {
    const lista =
        document.getElementById("lista-armas");
    if (!lista) return;

    lista.replaceChildren();

    (armas || []).forEach(arma => adicionarArma(arma, false));

    atualizarInventario();
}

export function carregarItens(itens) {
    const lista =
        document.getElementById("lista-itens");
    if (!lista) return;

    lista.replaceChildren();

    (itens || []).forEach(item => adicionarItem(item, false));

    atualizarInventario();
}
