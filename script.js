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

const classes = {
    Combatente: [
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

    Especialista: [
        "Técnico de Combate",
        "Artífice Prodígio",
        "Socorrista de Campo",
        "Camper de Elite",
        "Fantasma",
        "Negociante Experiente",
        "Arqueiro"
    ],

    Profeta: [
        "Destemido",
        "Receptáculo",
        "Alma Iluminada",
        "Olho Paranormal",
        "Invasor de Rede",
        "Replicante"
    ],

    Ascetico: [
        "Atormentado",
        "Devorador"
    ]
}

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

    classes[classeEscolhida].forEach(trilha => {

        const option = document.createElement("option");

        option.value = trilha;

        listaTrilhas.appendChild(option);
    });

    campoTrilha.disabled = false;
});

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