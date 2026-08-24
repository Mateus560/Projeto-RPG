import rituais from "../data/rituais.js";

export function adicionarRitual() {

    const lista =
        document.getElementById("lista-ritual");

    if (!lista) return;

    const ritual =
        document.createElement("div");

    ritual.classList.add("ritual");

    ritual.innerHTML = `
    <section class="section">
        <div class="field">

            <label>Ritual</label>

            <select class="selecionar-ritual">

                <option value="">
                    Selecione um ritual
                </option>

            </select>

        </div>

        <div class="dados-ritual" hidden>

            <h3 class="nome-ritual"></h3>

            <p>
                <strong>Elemento:</strong>
                <span class="elemento-ritual"></span>
            </p>

            <p>
                <strong>Círculo:</strong>
                <span class="circulo-ritual"></span>
            </p>

            <p>
                <strong>Patrono:</strong>
                <span class="patrono-ritual"></span>
            </p>

            <p>
                <strong>Execução:</strong>
                <span class="execucao-ritual"></span>
            </p>

            <p>
                <strong>Alcance:</strong>
                <span class="alcance-ritual"></span>
            </p>

            <p>
                <strong>Alvo:</strong>
                <span class="alvo-ritual"></span>
            </p>

            <p>
                <strong>Duração:</strong>
                <span class="duracao-ritual"></span>
            </p>

            <p>
                <strong>Resistência:</strong>
                <span class="resistencia-ritual"></span>
            </p>

            <div class="field">

                <strong>Descrição</strong>

                <p class="descricao-ritual"></p>

            </div>

            <div class="field">

                <strong>Discente</strong>

                <p class="discente-ritual"></p>
                <p class="requisito-discente"></p>


            </div>

            <div class="field">

                <strong>Verdadeiro</strong>

                <p class="verdadeiro-ritual"></p>
                <p class="requisito-verdadeiro"></p>

            </div>

        </div>
    </section>

        <button
            type="button"
            class="button-remover"
        >
            Remover
        </button>
    `;

    lista.appendChild(ritual);

    const select = ritual.querySelector(".selecionar-ritual");

    Object.keys(rituais).forEach(nome => {
        const option = document.createElement("option");

        option.value = nome;
        option.textContent = nome;

        select.appendChild(option);
    });

    select.addEventListener("change", () => {

        const nome = select.value;
        const dados = rituais[nome];

        const dadosRitual =
            ritual.querySelector(".dados-ritual");

        if (!dados) {
            dadosRitual.hidden = true;
            return;
        }

        ritual.querySelector(".nome-ritual").textContent =
            nome;

        ritual.querySelector(".elemento-ritual").textContent =
            dados.elemento;

        ritual.querySelector(".circulo-ritual").textContent =
            dados.circulo;

        ritual.querySelector(".patrono-ritual").textContent =
            dados.patrono || "—";

        ritual.querySelector(".execucao-ritual").textContent =
            dados.execucao;

        ritual.querySelector(".alcance-ritual").textContent =
            dados.alcance;

        ritual.querySelector(".alvo-ritual").textContent =
            dados.alvo;

        ritual.querySelector(".duracao-ritual").textContent =
            dados.duracao;

        ritual.querySelector(".resistencia-ritual").textContent =
            dados.resistencia || "Nenhuma";

        ritual.querySelector(".descricao-ritual").textContent =
            dados.descricao;

        ritual.querySelector(".discente-ritual").textContent =
            dados.discente?.efeito || "—";

        ritual.querySelector(".requisito-discente").textContent = dados.discente?.requisito || "Sem requisito";

        ritual.querySelector(".verdadeiro-ritual").textContent = 
            dados.verdadeiro?.efeito || "—";
        
        ritual.querySelector(".requisito-verdadeiro").textContent = dados.verdadeiro?.requisito || "—";

        dadosRitual.hidden = false;

        salvarRituais();
    });

    ritual
    .querySelector(".button-remover")
    .addEventListener("click", () => {
        ritual.remove();
        salvarRituais();
    });
}

export function coletarRituais() {

    const lista =
        document.getElementById("lista-ritual");

    if (!lista) return [];

    const rituaisSelecionados = [];

    lista
        .querySelectorAll(".ritual")
        .forEach(ritual => {

            const select =
                ritual.querySelector(
                    ".selecionar-ritual"
                );

            if (!select?.value) return;

            rituaisSelecionados.push({
                nome: select.value
            });
        });

    return rituaisSelecionados;
}

export function carregarRituais() {

    const dados =
        localStorage.getItem("ficha-personagem");

    if (!dados) return;

    const ficha = JSON.parse(dados);

    if (!ficha.rituais) return;

    ficha.rituais.forEach(dadosRitual => {

        adicionarRitual();

        const lista =
            document.getElementById("lista-ritual");

        const rituais =
            lista.querySelectorAll(".ritual");

        const ritual =
            rituais[rituais.length - 1];

        const select =
            ritual.querySelector(
                ".selecionar-ritual"
            );

        select.value = dadosRitual.nome;

        select.dispatchEvent(
            new Event("change")
        );
    });
}

export function salvarRituais() {

    const dados =
        localStorage.getItem("ficha-personagem");

    if (!dados) return;

    const ficha = JSON.parse(dados);

    ficha.rituais = coletarRituais();

    localStorage.setItem(
        "ficha-personagem",
        JSON.stringify(ficha)
    );
}