function alterarRecurso(id, valor) {

    const input = document.getElementById(id);

    let atual = Number(input.value);

    const tipo = id.replace("-atual", "");

    const maximo = Number(
        document.getElementById(`${tipo}-max`).textContent
    );

    atual += valor;

    if (atual < 0) {
        atual = 0;
    }

    if (atual > maximo) {
        atual = maximo;
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

function calcularStatus() {

    const classe = campoClasse.value;

    if (!classes[classe]) {
        return;
    }

    const epeem = Number(
        document.getElementById("epeem").value
    );

    const resistencia = Number(
        document.getElementById("resistencia").value
    );

    const influencia = Number(
        document.getElementById("influencia").value
    );

    const dadosClasse = classes[classe];

    const progresso = Math.max(0, Math.floor(epeem / 5) - 1);
    const vidaMaxima =
        dadosClasse.vidaBase +
        resistencia +
        (progresso * (dadosClasse.progressao.vida + resistencia));

    const peMaximo =
        dadosClasse.peBase +
        influencia +
        (progresso * (dadosClasse.progressao.pe + influencia));

    const sanidadeMaxima =
        dadosClasse.sanidadeBase +
        (progresso * dadosClasse.progressao.sanidade);

    document.getElementById("vida-max").textContent = vidaMaxima;

    document.getElementById("pe-max").textContent = peMaximo;

    document.getElementById("sanidade-max").textContent = sanidadeMaxima;

    const vidaAtual = document.getElementById("vida-atual");
    const peAtual = document.getElementById("pe-atual");
    const sanidadeAtual = document.getElementById("sanidade-atual");

    if (Number(vidaAtual.value) > vidaMaxima) {
        vidaAtual.value = vidaMaxima;
    }

    if (Number(peAtual.value) > peMaximo) {
        peAtual.value = peMaximo;
    }

    if (Number(sanidadeAtual.value) > sanidadeMaxima) {
        sanidadeAtual.value = sanidadeMaxima;
    }

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

    const bonus = pericia.querySelector('input[type="number"]');

    bonus.addEventListener("input", () => {

        let valor = Number(bonus.value);

        if (valor < 5) {
            valor = 5;
        }

        if (valor > 15) {
            valor = 15;
        }

        valor = Math.round(valor / 5) * 5;

        bonus.value = valor;
    });

    lista.appendChild(pericia);
}

function limitarValor(id, minimo, maximo) {
    const campo = document.getElementById(id)
    campo.addEventListener("input", () => {
        let valor = Number(campo.value);

        if (valor > maximo){
            campo.value = maximo
        }

        if (valor < minimo) {
            campo.value = minimo
        }
    });
}

function limitarRecursoAtual(id) {

    const campo = document.getElementById(id);

    campo.addEventListener("input", () => {

        const tipo = id.replace("-atual", "");

        const maximo = Number(
            document.getElementById(`${tipo}-max`).textContent
        );

        let valor = Number(campo.value);

        if (valor < 0) {
            valor = 0;
        }

        if (valor > maximo) {
            valor = maximo;
        }

        campo.value = valor;
    });
}

const campoResistencia = document.getElementById("resistencia")

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
        sanidadeBase: 12,

        progressao: {
            vida: 5,
            pe: 2,
            sanidade: 3
        }
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
        sanidadeBase: 16,

        progressao: {
            vida: 4,
            pe: 3,
            sanidade: 4
        }
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
        sanidadeBase: 20,

        progressao: {
            vida: 3,
            pe: 4,
            sanidade: 5
        }
    },

    Ascetico: {
        trilhas: [
            "Atormentado",
            "Devorador"
        ],

        vidaBase: 15,
        peBase: 3,
        sanidadeBase: 15,

        progressao: {
            vida: 3,
            pe: 3,
            sanidade: 4
        }
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
    calcularStatus();
});

document
    .getElementById("epeem")
    .addEventListener("input", calcularStatus);

document
    .getElementById("resistencia")
    .addEventListener("input", calcularStatus);

document
    .getElementById("influencia")
    .addEventListener("input", calcularStatus);

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

limitarValor("epeem", 0, 99)
limitarValor("forca", 0, 5)
limitarValor("agilidade", 0, 5)
limitarValor("influencia", 0, 5)
limitarValor("resistencia", 0, 5)
limitarValor("conhecimento", 0, 5)

limitarRecursoAtual("vida-atual");
limitarRecursoAtual("pe-atual");
limitarRecursoAtual("sanidade-atual");