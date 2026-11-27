import {
    coletarPericias,
    carregarPericiasIniciais,
    carregarPericiasOrigem,
    criarSlotsPericias,
    carregarPericias
} from "../domain/pericias.js";

import {
    coletarHabilidades
} from "./habilidades.js";

import {
    coletarArmas,
    coletarItens,
} from "../domain/inventario.js";

import {
    calcularStatus
} from "../domain/status.js";

import {
    mostrarAlerta
} from "./alertas.js";

import {
    coletarProficiencias,
    carregarProficienciasClasse 
} from "./proficiencias.js";
import { gravarDadosFicha, lerFichaSalva } from "../services/ficha-storage.js";


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

        anotacoes: document.getElementById("lista-anotacoes")
            ? Array.from(
                document.querySelectorAll("#lista-anotacoes textarea"),
                campo => campo.value
            )
            : (lerFichaSalva()?.anotacoes ?? []),


        // ====================================================
        // MÓDULOS
        // ====================================================

        pericias:
            coletarPericias(),

        habilidades:
            document.getElementById("lista-habilidades")
                ? coletarHabilidades()
                : lerFichaSalva()?.habilidades || [],

        armas:
            document.getElementById("lista-armas")
                ? coletarArmas()
                : lerFichaSalva()?.armas || [],

        itens:
            document.getElementById("lista-itens")
                ? coletarItens()
                : lerFichaSalva()?.itens || [],

        proficiencias:
            coletarProficiencias(),

        // ====================================================
        // ALMA
        // ====================================================

        alma:
            document.getElementById("alma").value,
    };
}


// ============================================================
// SALVAR FICHA
// ============================================================

export function salvarFicha() {
    gravarDadosFicha(coletarFicha());

    mostrarAlerta(
        "Salvar",
        "Ficha salva com sucesso!"
    );
}


// ============================================================
// CARREGAR FICHA
// ============================================================

export function carregarFicha() {
    const ficha = lerFichaSalva();

    if (!ficha) {

        mostrarAlerta(
            "Carregar",
            "Nenhuma ficha salva encontrada."
        );

        return;
    }


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
    // PROFICIÊNCIAS
    // ========================================================

    carregarProficienciasClasse();

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
    // FINAL
    // ========================================================
}
