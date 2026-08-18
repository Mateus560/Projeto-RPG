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

function criarSlotsPericias() {

    const lista = document.getElementById("lista-pericias");

    lista.innerHTML = "";

    const classe = campoClasse.value;

    const conhecimento = Number(
        document.getElementById("conhecimento").value
    );

    if (!classes[classe]) {
        return;
    }

    const limite =
        classes[classe].limitePericias + conhecimento;

    for (let i = 0; i < limite; i++) {

        const campo = document.createElement("div");

        campo.classList.add("skill");

        campo.innerHTML = `
            <input
                type="text"
                list="lista-pericias-disponiveis"
                placeholder="Escolha uma perícia"
            >

            <select>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        `;

        lista.appendChild(campo);
    }
}

function carregarPericiasIniciais() {

    const classe = campoClasse.value;

    if (!classes[classe]) {
        return;
    }

    const lista = document.getElementById("pericias-iniciais");

    lista.innerHTML = "";

    classes[classe].periciasIniciais?.forEach(pericia => {

        const campo = document.createElement("div");

        campo.classList.add("skill");

        if (Array.isArray(pericia)) {

            campo.innerHTML = `
                <select>
                    ${pericia.map(opcao => `
                        <option value="${opcao}">
                            ${opcao}
                        </option>
                    `).join("")}
                </select>

                <select>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            `;

        } else {

            campo.innerHTML = `
                <input
                    type="text"
                    value="${pericia}"
                    readonly
                >

                <select>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            `;
        }

        lista.appendChild(campo);
    });
}

function calcularEspacoInventario() {
    const forca = Number(
        document.getElementById("forca").value
    );
    if (forca === 0){
        return 2
    };
    return forca * 5
}

function calcularEspacoUsado() {

    let espacoUsado = 0;

    const espacos = document.querySelectorAll(".espaco-arma");

    espacos.forEach(campo => {
        espacoUsado += Number(campo.value) || 0;
    });

    return espacoUsado;
}

function atualizarInventario() {

    const usado = calcularEspacoUsado();
    const maximo = calcularEspacoInventario();

    document.getElementById("espaco").textContent =
        `Espaço: ${usado}/${maximo}`;
}

function adicionarArma() {

    const lista = document.getElementById("lista-armas");

    const arma = document.createElement("div");

    arma.classList.add("inventory-item");

    arma.innerHTML = `
        <div class="field">

            <label>Nome da arma</label>

            <input
                type="text"
                placeholder="Ex: Espada longa"
            >

        </div>

        <div class="grid grid-3">

            <div class="field">

                <label>Dano</label>

                <input
                    type="text"
                    placeholder="Ex: 1d8"
                >

            </div>

            <div class="field">

                <label>Crítico</label>

                <input
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
                    class="espaco-arma"
                >

            </div>

        </div>

        <button
            type="button"
            class="button-remover"
            onclick="this.parentElement.remove(); atualizarInventario();"
        >
            Remover
        </button>
    `;

    lista.appendChild(arma);
    const campoEspaco = arma.querySelector(".espaco-arma");
    campoEspaco.addEventListener("input", atualizarInventario);
    atualizarInventario();
}

function adicionarItem(){
    const lista = document.getElementById("lista-itens");
    const item = document.createElement("div");

    item.classList.add("inventory-items");
    item.innerHTML = `
        <div class="field">

            <label>Nome do item</label>

            <input
                type="text"
                placeholder="Ex: Corda"
            >

            <div class="field">

                <label>Espaço</label>

                <input
                    type="number"
                    min="0"
                    value="1"
                    class="espaco-arma"
                >
            </div>
            <div class="field">
                <label>Descrição<label>
                <textarea>
                </textarea>
            </div>
        </div>

        <button
            type="button"
            class="button-remover"
            onclick="this.parentElement.remove(); atualizarInventario();"
        >
            Remover
        </button>
    `;

    lista.appendChild(item);
    const campoEspaco = item.querySelector(".espaco-arma");
    campoEspaco.addEventListener("input", atualizarInventario);
    atualizarInventario();
}

function adicionarHabilidade() {

    const lista = document.getElementById("lista-habilidades");

    const habilidade = document.createElement("div");

    habilidade.classList.add("ability");

    habilidade.innerHTML = `
        <div class="field">
            <label>Nome</label>
            <input
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
                    type="text"
                    placeholder="Ex: 2d8"
                >
            </div>

        </div>

        <div class="field">
            <label>Descrição</label>
            <textarea
                placeholder="Descreva o efeito da habilidade..."
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

    const botaoUsar = habilidade.querySelector(".usar-habilidade");
    const botaoRemover = habilidade.querySelector(".button-remover");

    botaoUsar.addEventListener("click", () => {
        usarHabilidade(habilidade);
    });

    botaoRemover.addEventListener("click", () => {
        habilidade.remove();
    });
}

function usarHabilidade(habilidade) {

    const custo = Number(
        habilidade.querySelector(".custo-habilidade").value
    );

    const pe = document.getElementById("pe-atual");

    const atual = Number(pe.value);

    if (atual < custo) {
        mostrarAlerta("Você não possui PE suficiente para usar esta habilidade.");
        return;
    }

    alterarRecurso("pe-atual", -custo);
}

function mostrarAlerta(titulo, mensagem) {

    const modal = document.getElementById("modal-alerta");
    modal.querySelector("h3").textContent = titulo;
    modal.querySelector("p").textContent = mensagem;

    modal.style.display = "flex";
}

function fecharAlerta() {

    const modal = document.getElementById("modal-alerta");

    modal.style.display = "none";
}

function coletarPericias() {

    const periciasIniciais = [];

    document
        .querySelectorAll("#pericias-iniciais .skill")
        .forEach(skill => {

            const campo = skill.querySelector("input, select");
            const valor = skill.querySelector("select:last-child").value;

            periciasIniciais.push({
                nome: campo.value,
                valor: valor
            });
        });


    const periciasAdicionais = [];

    document
        .querySelectorAll("#lista-pericias .skill")
        .forEach(skill => {

            const nome = skill.querySelector("input").value;
            const valor = skill.querySelector("select").value;

            periciasAdicionais.push({
                nome: nome,
                valor: valor
            });
        });


    return {
        iniciais: periciasIniciais,
        adicionais: periciasAdicionais
    };
}

function carregarPericias(pericias) {

    if (!pericias) {
        return;
    }

    // =========================
    // PERÍCIAS INICIAIS
    // =========================

    const iniciais =
        document.querySelectorAll("#pericias-iniciais .skill");

    pericias.iniciais.forEach((pericia, index) => {

        const skill = iniciais[index];

        if (!skill) {
            return;
        }

        const campoNome =
            skill.querySelector("input, select");

        const camposValor =
            skill.querySelectorAll("select");

        campoNome.value = pericia.nome;

        camposValor[camposValor.length - 1].value =
            pericia.valor;
    });


    // =========================
    // PERÍCIAS ADICIONAIS
    // =========================

    const adicionais =
        document.querySelectorAll("#lista-pericias .skill");

    pericias.adicionais.forEach((pericia, index) => {

        const skill = adicionais[index];

        if (!skill) {
            return;
        }

        const campoNome =
            skill.querySelector("input");

        const campoValor =
            skill.querySelector("select");

        campoNome.value = pericia.nome;
        campoValor.value = pericia.valor;
    });
}

function coletarFicha() {

    return {
        nome: document.getElementById("nome").value,
        origem: document.getElementById("origem").value,
        classe: document.getElementById("classe").value,
        trilha: document.getElementById("trilha").value,
        epeem: document.getElementById("epeem").value,

        atributos: {
            forca: document.getElementById("forca").value,
            agilidade: document.getElementById("agilidade").value,
            resistencia: document.getElementById("resistencia").value,
            conhecimento: document.getElementById("conhecimento").value,
            influencia: document.getElementById("influencia").value
        },

        recursos: {
            vida: document.getElementById("vida-atual").value,
            pe: document.getElementById("pe-atual").value,
            sanidade: document.getElementById("sanidade-atual").value
        },

        anotacoes: document.querySelector("textarea").value,

        pericias: coletarPericias()
    };
}

function salvarFicha() {

    const ficha = coletarFicha();

    localStorage.setItem(
        "ficha-personagem",
        JSON.stringify(ficha)
    );
    console.log("Ficha salva:", ficha);
    mostrarAlerta("Salvar", "Ficha salva com sucesso!");
}

function carregarFicha() {

    const dados = localStorage.getItem("ficha-personagem");

    if (!dados) {
        mostrarAlerta("Carregar", "Nenhuma ficha salva encontrada.");
        return;
    }

    const ficha = JSON.parse(dados);

    document.getElementById("nome").value = ficha.nome;
    document.getElementById("origem").value = ficha.origem;
    document.getElementById("classe").value = ficha.classe;
    document.getElementById("trilha").value = ficha.trilha;
    document.getElementById("epeem").value = ficha.epeem;

    campoClasse.dispatchEvent(new Event("change"));

    document.getElementById("forca").value =
        ficha.atributos.forca;

    document.getElementById("agilidade").value =
        ficha.atributos.agilidade;

    document.getElementById("resistencia").value =
        ficha.atributos.resistencia;

    document.getElementById("conhecimento").value =
        ficha.atributos.conhecimento;

    document.getElementById("influencia").value =
        ficha.atributos.influencia;

    document.getElementById("vida-atual").value =
        ficha.recursos.vida;

    document.getElementById("pe-atual").value =
        ficha.recursos.pe;

    document.getElementById("sanidade-atual").value =
        ficha.recursos.sanidade;

    document.querySelector("textarea").value =
        ficha.anotacoes;


    calcularStatus();
    criarSlotsPericias();
    atualizarInventario();
    mostrarAlerta("Carregar", "Ficha carregada com sucesso!");

    carregarPericias(ficha.pericias);
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
        sanidadeBase: 12,

        progressao: {
            vida: 5,
            pe: 2,
            sanidade: 3
        },

        periciasIniciais: [
            ["Combate", "Pontaria"],
            ["Reflexos", "Fortificação"]
        ],

        limitePericias: 2
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
        },

        limitePericias: 7
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
        },

        periciasIniciais: [
            "Ritualismo", "Resistir"
        ],

        limitePericias: 3
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
        },

        periciasIniciais: [
            "Ritualismo", "Religião"
        ],

        limitePericias: 3
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

const armas = [

];

const itens = [
    
];

const inventario = [];

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

        document.getElementById("lista-pericias").innerHTML = "";
        document.getElementById("pericias-iniciais").innerHTML = "";

        return;
    }

    classes[classeEscolhida].trilhas.forEach(trilha => {

        const option = document.createElement("option");

        option.value = trilha;

        listaTrilhas.appendChild(option);
    });

    campoTrilha.disabled = false;

    calcularStatus();
    carregarPericiasIniciais();
    criarSlotsPericias();
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

document
    .getElementById("conhecimento")
    .addEventListener("input", criarSlotsPericias);

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

limitarRecursoAtual("vida-atual");
limitarRecursoAtual("pe-atual");
limitarRecursoAtual("sanidade-atual");
limitarValor("forca", 0, 5)
limitarValor("resistencia", 0, 5)
limitarValor("agilidade", 0, 5)
limitarValor("influencia", 0, 5)
limitarValor("conhecimento", 0, 5)

document
    .getElementById("forca")
    .addEventListener("input", atualizarInventario);

atualizarInventario();