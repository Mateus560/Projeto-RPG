import { alterarRecurso } from "./recursos.js";
import { mostrarAlerta } from "./ui.js";

export function adicionarHabilidade(dados = null) {
    const lista =
        document.getElementById("lista-habilidades");

    if (!lista) return;

    const habilidade =
        document.createElement("div");

    habilidade.classList.add("ability");

    habilidade.innerHTML = `
        <div class="field">
            <label>Nome</label>

            <input
                class="nome-habilidade"
                type="text"
                placeholder="Nome da habilidade"
            >
        </div>

        <div class="grid grid-2">

            <div class="field">
                <label>Custo em PE</label>

                <input
                    type="number"
                    class="custo-habilidade"
                    min="1"
                    value="1"
                >
            </div>

            <div class="field">
                <label>Dano/Efeito</label>

                <input
                    class="efeito-habilidade"
                    type="text"
                    placeholder="Ex: 2d8"
                >
            </div>

        </div>

        <div class="field">

            <label>Descrição</label>

            <textarea
                class="descricao-habilidade"
                placeholder="Descreva o efeito..."
            ></textarea>

        </div>

        <div class="ability-actions">

            <button
                type="button"
                class="usar-habilidade"
            >
                Usar
            </button>

            <button
                type="button"
                class="button-remover"
            >
                Remover
            </button>

        </div>
    `;

    lista.appendChild(habilidade);


    // ========================================================
    // CARREGAR DADOS
    // ========================================================

    if (dados) {

        habilidade.querySelector(
            ".nome-habilidade"
        ).value = dados.nome || "";

        habilidade.querySelector(
            ".custo-habilidade"
        ).value = dados.custo || 1;

        habilidade.querySelector(
            ".efeito-habilidade"
        ).value = dados.efeito || "";

        habilidade.querySelector(
            ".descricao-habilidade"
        ).value = dados.descricao || "";
    }


    // ========================================================
    // EVENTOS
    // ========================================================

    habilidade
        .querySelector(".usar-habilidade")
        .addEventListener("click", () => {

            usarHabilidade(habilidade);

        });


    habilidade
        .querySelector(".button-remover")
        .addEventListener("click", () => {

            habilidade.remove();

        });
}


// ============================================================
// USAR HABILIDADE
// ============================================================

export function usarHabilidade(habilidade) {

    const custo =
        Number(
            habilidade.querySelector(
                ".custo-habilidade"
            ).value
        ) || 0;


    const pe =
        Number(
            document.getElementById(
                "pe-atual"
            ).value
        ) || 0;


    if (pe < custo) {

        mostrarAlerta(
            "PE Insuficiente!",
            "Você não possui PE suficiente para usar esta habilidade."
        );

        return;
    }

    alterarRecurso(
        "pe-atual",
        -custo
    );
}


// ============================================================
// COLETAR HABILIDADES
// ============================================================

export function coletarHabilidades() {

    const habilidades = [];

    document
        .querySelectorAll(
            "#lista-habilidades .ability"
        )
        .forEach(habilidade => {

            habilidades.push({

                nome:
                    habilidade.querySelector(
                        ".nome-habilidade"
                    ).value,

                custo:
                    habilidade.querySelector(
                        ".custo-habilidade"
                    ).value,

                efeito:
                    habilidade.querySelector(
                        ".efeito-habilidade"
                    ).value,

                descricao:
                    habilidade.querySelector(
                        ".descricao-habilidade"
                    ).value
            });

        });

    return habilidades;
}


// ============================================================
// CARREGAR HABILIDADES
// ============================================================

export function carregarHabilidades(habilidades) {

    if (!habilidades) return;

    const lista =
        document.getElementById(
            "lista-habilidades"
        );

    if (!lista) return;

    lista.innerHTML = "";

    habilidades.forEach(
        habilidade => adicionarHabilidade(habilidade)
    );
}