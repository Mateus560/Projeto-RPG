// ============================================================
// DADOS
// ============================================================

import origens from "./data/origens.js";
import classes from "./data/classes.js";
import almas from "./data/almas.js";
import periciasDisponiveis from "./data/pericias.js";

import {
    duracoes,
    execucoes,
    alvos,
    alcances
} from "./data/rituais.js";

import {
    carregarPericiasIniciais,
    carregarPericiasOrigem,
    criarSlotsPericias,
} from "./modules/pericias.js";

import {
    adicionarHabilidade,
} from "./modules/habilidades.js";

import {
    alterarRecurso,
    limitarRecursoAtual,
    receberDano
} from "./modules/recursos.js"

import {
    fecharAlerta
} from "./modules/ui.js";

import {
    adicionarArma,
    adicionarItem,
    atualizarInventario
} from "./modules/inventario.js";

import {atualizarAlma} from "./modules/alma.js";

import { calcularStatus } from "./modules/status.js";

import {
    salvarFicha,
    carregarFicha
} from "./modules/ficha.js";

// ============================================================
// REFERÊNCIAS DO HTML
// ============================================================

const campoNome = document.getElementById("nome");
const campoOrigem = document.getElementById("origem");
const campoClasse = document.getElementById("classe");
const campoTrilha = document.getElementById("trilha");
const campoEpeem = document.getElementById("epeem");
const campoAlma = document.getElementById("alma");

// ============================================================
// FUNÇÕES UTILITÁRIAS
// ============================================================

function preencherLista(idLista, opcoes) {
    const lista = document.getElementById(idLista);

    if (!lista) {
        console.warn(`Elemento #${idLista} não encontrado.`);
        return;
    }

    lista.innerHTML = "";

    opcoes.forEach(opcao => {
        const option = document.createElement("option");
        option.value = opcao;
        lista.appendChild(option);
    });
}


function preencherAtributo(id) {
    const campo = document.getElementById(id);

    if (!campo) {
        console.warn(`Elemento #${id} não encontrado.`);
        return;
    }

    campo.innerHTML = "";

    for (let i = 0; i <= 5; i++) {
        const option = document.createElement("option");

        option.value = i;
        option.textContent = i;

        if (i === 1) {
            option.selected = true;
        }

        campo.appendChild(option);
    }
}


// ============================================================
// RECURSOS
// ============================================================


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // Listas

    preencherLista(
        "lista-pericias-disponiveis",
        periciasDisponiveis
    );

    preencherLista(
        "lista-classes",
        Object.keys(classes)
    );

    preencherLista(
        "lista-origens",
        Object.keys(origens)
    );

    preencherLista(
        "lista-almas",
        Object.keys(almas)
    );

    preencherLista(
        "duracoes-rituais",
        duracoes
    );

    preencherLista(
        "execucoes-rituais",
        execucoes
    );

    preencherLista(
        "alvos-rituais",
        alvos
    );

    preencherLista(
        "alcances-rituais",
        alcances
    );

    // Atributos

    preencherAtributo("forca");
    preencherAtributo("agilidade");
    preencherAtributo("resistencia");
    preencherAtributo("conhecimento");
    preencherAtributo("influencia");


    // Recursos

    limitarRecursoAtual("vida-atual");
    limitarRecursoAtual("pe-atual");
    limitarRecursoAtual("sanidade-atual");


    // Alma

    campoAlma.addEventListener(
        "change",
        atualizarAlma
    );


    // Origem

    campoOrigem.addEventListener(
        "change",
        () => {
            carregarPericiasOrigem();
        }
    );


    // Classe

    campoClasse.addEventListener(
        "change",
        () => {
            const classe =
                campoClasse.value;

            const listaTrilhas =
                document.getElementById(
                    "lista-trilhas"
                );

            listaTrilhas.innerHTML = "";

            campoTrilha.value = "";


            if (!classes[classe]) {
                campoTrilha.disabled = true;

                document.getElementById(
                    "lista-pericias"
                ).innerHTML = "";

                document.getElementById(
                    "pericias-iniciais"
                ).innerHTML = "";

                return;
            }


            classes[classe].trilhas.forEach(
                trilha => {
                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value = trilha;

                    listaTrilhas.appendChild(
                        option
                    );
                }
            );


            campoTrilha.disabled = false;

            calcularStatus();

            carregarPericiasIniciais();

            criarSlotsPericias();
        }
    );


    // Eventos de status

    campoEpeem.addEventListener(
        "input",
        calcularStatus
    );

    document
        .getElementById("resistencia")
        .addEventListener(
            "input",
            calcularStatus
        );

    document
        .getElementById("influencia")
        .addEventListener(
            "input",
            calcularStatus
        );


    document
        .getElementById("conhecimento")
        .addEventListener(
            "input",
            criarSlotsPericias
        );


    document
        .getElementById("forca")
        .addEventListener(
            "input",
            atualizarInventario
        );

        
    document
        .getElementById("adicionar-habilidade")
        .addEventListener("click", () => {
            adicionarHabilidade();
        });

    document
        .getElementById("adicionar-arma")
        .addEventListener(
            "click",
            adicionarArma
        );
    
    document
        .getElementById("adicionar-item")
        .addEventListener(
            "click",
            adicionarItem
        );
        
    document
        .getElementById("entendi")
        .addEventListener(
            "click",
            fecharAlerta
        );
    document
        .getElementById("pv-dano")
        .addEventListener("click", () => {
            const dano = document.getElementById("dano-pv").value;

            receberDano(dano);
        });
    
    document
        .getElementById("sanidade-dano")
        .addEventListener("click", () => {
            const dano = document.getElementById("dano-sanidade").value;

            receberDano(dano)
        });
    // botões de diminuir e aumentar PV
    document
        .getElementById("aumentar-pv")
        .addEventListener("click", () => {
            alterarRecurso("vida-atual", +1)
        });
    
    document
        .getElementById("diminuir-pv")
        .addEventListener("click", () => {
            alterarRecurso("vida-atual", -1)
        });

    // botões de diminuir e aumentar PE
    document
        .getElementById("aumentar-pe")
        .addEventListener("click", () => {
            alterarRecurso("pe-atual", +1)
        });   
    
    document
        .getElementById("diminuir-pe")
        .addEventListener("click", () => {
            alterarRecurso("pe-atual", -1)
        });
    
    // botões de diminuir e aumentar Sanidade
    document
        .getElementById("aumentar-sanidade")
        .addEventListener("click", () => {
            alterarRecurso("sanidade-atual", +1)
        });
    
    document
        .getElementById("diminuir-sanidade")
        .addEventListener("click", () => {
            alterarRecurso("sanidade-atual", -1)
        });

    document
    .getElementById("salvar-ficha")
    .addEventListener(
        "click",
        salvarFicha
    );

    document
        .getElementById("carregar-ficha")
        .addEventListener(
            "click",
            carregarFicha
        );

    // Estado inicial

    atualizarInventario();

    calcularStatus();
});