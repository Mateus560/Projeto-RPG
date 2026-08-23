import {
    coletarPericias,
    carregarPericiasIniciais,
    carregarPericiasOrigem,
    criarSlotsPericias,
    carregarPericias
} from "./pericias.js";

import {
    coletarHabilidades,
    carregarHabilidades
} from "./habilidades.js";

import {
    coletarRituais,
    carregarRituais
} from "./rituais.js";

import {
    coletarArmas,
    coletarItens,
    carregarArmas,
    carregarItens,
    atualizarInventario
} from "./inventario.js";

import {
    calcularStatus
} from "./status.js";

import {
    mostrarAlerta
} from "./ui.js";


// ============================================================
// COLETAR FICHA
// ============================================================

export function coletarFicha() {

    return {

        nome:
            document.getElementById("nome").value,

        origem:
            document.getElementById("origem").value,

        classe:
            document.getElementById("classe").value,

        trilha:
            document.getElementById("trilha").value,

        epeem:
            document.getElementById("epeem").value,


        // ====================================================
        // ATRIBUTOS
        // ====================================================

        atributos: {

            forca:
                document.getElementById("forca").value,

            agilidade:
                document.getElementById("agilidade").value,

            resistencia:
                document.getElementById("resistencia").value,

            conhecimento:
                document.getElementById("conhecimento").value,

            influencia:
                document.getElementById("influencia").value
        },


        // ====================================================
        // RECURSOS
        // ====================================================

        recursos: {

            vida:
                document.getElementById("vida-atual").value,

            pe:
                document.getElementById("pe-atual").value,

            sanidade:
                document.getElementById("sanidade-atual").value
        },


        // ====================================================
        // ANOTAÇÕES
        // ====================================================

        anotacoes:
            document.querySelector(
                ".anotacoes"
            )?.value || "",


        // ====================================================
        // MÓDULOS
        // ====================================================

        pericias:
            coletarPericias(),

        habilidades:
            coletarHabilidades(),

        rituais:
            coletarRituais(),

        armas:
            coletarArmas(),

        itens:
            coletarItens(),


        // ====================================================
        // ALMA
        // ====================================================

        alma:
            document.getElementById("alma").value
    };
}


// ============================================================
// SALVAR FICHA
// ============================================================

export function salvarFicha() {

    const ficha =
        coletarFicha();

    localStorage.setItem(
        "ficha-personagem",
        JSON.stringify(ficha)
    );

    console.log(
        "Ficha salva:",
        ficha
    );

    mostrarAlerta(
        "Salvar",
        "Ficha salva com sucesso!"
    );
}


// ============================================================
// CARREGAR FICHA
// ============================================================

export function carregarFicha() {

    const dados =
        localStorage.getItem(
            "ficha-personagem"
        );

    if (!dados) {

        mostrarAlerta(
            "Carregar",
            "Nenhuma ficha salva encontrada."
        );

        return;
    }


    const ficha =
        JSON.parse(dados);


    // ========================================================
    // DADOS BÁSICOS
    // ========================================================

    document.getElementById("nome").value =
        ficha.nome || "";

    document.getElementById("origem").value =
        ficha.origem || "";


    document
        .getElementById("origem")
        .dispatchEvent(
            new Event("change")
        );


    document.getElementById("classe").value =
        ficha.classe || "";


    document
        .getElementById("classe")
        .dispatchEvent(
            new Event("change")
        );


    document.getElementById("trilha").value =
        ficha.trilha || "";

    document.getElementById("epeem").value =
        ficha.epeem || "";


    // ========================================================
    // ATRIBUTOS
    // ========================================================

    document.getElementById("forca").value =
        ficha.atributos?.forca ?? 1;

    document.getElementById("agilidade").value =
        ficha.atributos?.agilidade ?? 1;

    document.getElementById("resistencia").value =
        ficha.atributos?.resistencia ?? 1;

    document.getElementById("conhecimento").value =
        ficha.atributos?.conhecimento ?? 1;

    document.getElementById("influencia").value =
        ficha.atributos?.influencia ?? 1;


    // ========================================================
    // ALMA
    // ========================================================

    document.getElementById("alma").value =
        ficha.alma || "";

    document
        .getElementById("alma")
        .dispatchEvent(
            new Event("change")
        );


    // ========================================================
    // STATUS
    // ========================================================

    calcularStatus();


    // ========================================================
    // RECURSOS
    // ========================================================

    document.getElementById("vida-atual").value =
        ficha.recursos?.vida ?? 0;

    document.getElementById("pe-atual").value =
        ficha.recursos?.pe ?? 0;

    document.getElementById("sanidade-atual").value =
        ficha.recursos?.sanidade ?? 0;

    // ========================================================
    // ANOTAÇÕES
    // ========================================================

    document.querySelector(".anotacoes").value =
        ficha.anotacoes || "";


    // ========================================================
    // PERÍCIAS
    // ========================================================

    carregarPericiasIniciais();

    criarSlotsPericias();

    carregarPericias(
        ficha.pericias
    );

    carregarPericiasOrigem(
        ficha.pericias?.origem
    );


    // ========================================================
    // HABILIDADES
    // ========================================================

    carregarHabilidades(
        ficha.habilidades
    );


    // ========================================================
    // RITUAIS
    // ========================================================

    


    // ========================================================
    // INVENTÁRIO
    // ========================================================

    carregarArmas(
        ficha.armas
    );

    carregarItens(
        ficha.itens
    );

    atualizarInventario();


    // ========================================================
    // FINAL
    // ========================================================

    mostrarAlerta(
        "Carregar",
        "Ficha carregada com sucesso!"
    );
}