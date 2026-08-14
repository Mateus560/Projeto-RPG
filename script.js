function alterarRecurso(id, valor) {

            const input = document.getElementById(id);

            let atual = Number(input.value);

            atual += valor;

            if (atual < 0) {
                atual = 0;
            }

            input.value = atual;
}

function preencherLista(idLista, opcoes) {

    const lista = document.getElementById(idLista);

    opcoes.forEach(opcao => {

        const option = document.createElement("option");

        option.value = opcao;

        lista.appendChild(option);
    });
}

function calcularVida() {

    const classe = campoClasse.value;

    const resistencia = Number(
        document.getElementById("resistencia").value
    );

    if (!classes[classe]) {
        return;
    }

    const vidaBase = classes[classe].vidaBase;

    const vidaMaxima = vidaBase + resistencia;

    document.getElementById("vida").value = vidaMaxima;
    document.getElementById("vida-max").textContent = `/ ${vidaMaxima}`;
}

function calcularPE() {
    const classe = campoClasse.value;

    const influencia = Number(
        document.getElementById("influencia").value
    );

    if (!classes[classe]){
        return;
    }

    const peBase = classes[classe].peBase;
    const peMaximo = peBase + influencia;
    
    document.getElementById("pe").value = peMaximo
    document.getElementById("pe-max").textContent = `/ ${peMaximo}`;
}

function calcularSanidade() {

    const classe = campoClasse.value;

    if (!classes[classe]) {
        return;
    }

    const sanidadeMaxima = classes[classe].sanidadeBase;

    document.getElementById("sanidade").value = sanidadeMaxima;
    document.getElementById("sanidade-max").textContent = `/ ${sanidadeMaxima}`;
}

function adicionarPericia() {

    const lista = document.getElementById("lista-pericias");

    const pericia = document.createElement("div");

    pericia.classList.add("skill");

    pericia.innerHTML = `
        <input
            type="text"
            list="lista-pericias-disponiveis"
            placeholder="Escolha uma perícia"
        >

        <input
            type="number"
            value="5"
            min="5"
            max="15"
            step="5"
        >

        <button
            type="button"
            onclick="this.parentElement.remove()"
        >
            🗑
        </button>
    `;

    lista.appendChild(pericia);
}

const classes = {
    Combatente: {
        trilhas: [
            "Berserker",
            "Vigia",
            "Fortificado",
            "Solo",
            "Aberrante",
            "Samurai Urbano",
            "Feiticeiro",
            "Punho Divergente",
            "Caçador Desamparado"
        ],

        vidaBase: 20,
        peBase: 2,
        sanidadeBase: 12
    },

    Especialista: {
        trilhas: [
            "Técnico de Combate",
            "Artífice Prodígio",
            "Socorrista de Campo",
            "Camper de Elite",
            "Fantasma",
            "Negociante Experiente",
            "Arqueiro"
        ],

        vidaBase: 16,
        peBase: 3,
        sanidadeBase: 16
    },

    Profeta: {
        trilhas: [
            "Destemido",
            "Receptáculo",
            "Alma Iluminada",
            "Olho Paranormal",
            "Invasor de Rede",
            "Replicante"
        ],

        vidaBase: 13,
        peBase: 4,
        sanidadeBase: 20
    },

    Ascetico: {
        trilhas: [
            "Atormentado",
            "Devorador"
        ],

        vidaBase: 15,
        peBase: 3,
        sanidadeBase: 15
    }
};

const periciasDisponiveis = [
    "Atletismo",
    "Furtividade",
    "Investigação",
    "Acrobacia",
    "Enganação",
    "Intimidação",
    "Percepção",
    "Diplomacia",
    "Sobrevivência",
    "Sedução",
    "Documentos",
    "Combate",
    "Pontaria",
    "Fortificação",
    "Iniciativa",
    "Ofício",
    "Reflexos",
    "Resistir",
    "Tecnologia",
    "Medicina",
    "Intuição",
    "Crime",
    "Domar"
];

const listaPericiasDisponiveis =
    document.getElementById("lista-pericias-disponiveis");

periciasDisponiveis.forEach(pericia => {

    const option = document.createElement("option");

    option.value = pericia;

    listaPericiasDisponiveis.appendChild(option);
});

const listaClasses = document.getElementById("lista-classes");

Object.keys(classes).forEach(classe => {

    const option = document.createElement("option");

    option.value = classe;

    listaClasses.appendChild(option);
});

const campoClasse = document.getElementById("classe");
const campoTrilha = document.getElementById("trilha");
const listaTrilhas = document.getElementById("lista-trilhas");

campoClasse.addEventListener("change", () => {

    const classeEscolhida = campoClasse.value;

    listaTrilhas.innerHTML = "";

    campoTrilha.value = "";

    if (!classes[classeEscolhida]) {
        campoTrilha.disabled = true;
        return;
    }

    classes[classeEscolhida].trilhas.forEach(trilha => {

        const option = document.createElement("option");

        option.value = trilha;

        listaTrilhas.appendChild(option);
    });

    campoTrilha.disabled = false;
    calcularVida();
    calcularPE();
    calcularSanidade();
});

document
    .getElementById("resistencia")
    .addEventListener("input", calcularVida);

document
    .getElementById("influencia")
    .addEventListener("input", calcularPE);

const origens = [
    "Acadêmico estudioso",
    "Amaldiçoado fortalecido",
    "Amigo dos animais",
    "Amnésico",
    "Artista de rua",
    "Atleta",
    "Ator/Atriz",
    "Criminoso",
    "Enfermeiro",
    "Engenheiro",
    "Escritor",
    "Espadachim",
    "Estilista",
    "Inventor",
    "Investigador Paranormal",
    "Jornalista",
    "Lutador",
    "Mecânico de armas",
    "Médico",
    "Ocultista arrependido",
    "Policial/Segurança",
    "Prodígio",
    "Prometido",
    "Rato de laboratório",
    "Religioso",
    "Selado marcado",
    "Sobrevivente anormal",
    "Soldado militar",
    "T.I"
];

preencherLista("lista-origens", origens)