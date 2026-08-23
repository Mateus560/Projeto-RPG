export function calcularEspacoInventario() {
    const forca =
        Number(document.getElementById("forca").value) || 0;

    if (forca === 0) {
        return 2;
    }

    return forca * 5;
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


export function adicionarArma(dados = null) {
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

        <div class="grid grid-3">
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
        </div>

        <div class="field">
            <label>Descrição</label>
            <textarea
                class="descricao-arma"
                placeholder="Descrição da arma"
            ></textarea>
        </div>

        <button
            type="button"
            class="button-remover"
        >
            Remover
        </button>
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
            dados.espaco || 1;

        arma.querySelector(".descricao-arma").value =
            dados.descricao || "";
    }

    arma.querySelector(".button-remover")
        .addEventListener("click", () => {
            arma.remove();
            atualizarInventario();
        });

    arma.querySelector(".espaco-inventario")
        .addEventListener("input", atualizarInventario);

    atualizarInventario();
}

export function adicionarItem(dados = null) {
    const lista =
        document.getElementById("lista-itens");

    if (!lista) return;

    const item =
        document.createElement("div");

    item.classList.add("inventory-items");

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
            dados.espaco || 1;

        item.querySelector(".descricao-item").value =
            dados.descricao || "";
    }

    item.querySelector(".button-remover")
        .addEventListener("click", () => {
            item.remove();
            atualizarInventario();
        });

    item.querySelector(".espaco-inventario")
        .addEventListener("input", atualizarInventario);

    atualizarInventario();
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
        .querySelectorAll("#lista-itens .inventory-items")
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
    if (!armas) return;

    const lista =
        document.getElementById("lista-armas");

    lista.innerHTML = "";

    armas.forEach(adicionarArma);

    atualizarInventario();
}

export function carregarItens(itens) {
    if (!itens) return;

    const lista =
        document.getElementById("lista-itens");

    lista.innerHTML = "";

    itens.forEach(adicionarItem);

    atualizarInventario();
}