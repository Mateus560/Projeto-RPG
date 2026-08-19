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

function carregarPericiasOrigem(periciasSalvas = null) {

    const lista = document.getElementById("pericias-origem");

    lista.innerHTML = "";

    const origem = campoOrigem.value;

    if (!origens[origem]) {
        return;
    }

    const pericias = periciasSalvas || origens[origem].pericias;

    pericias.forEach(pericia => {

        const campo = document.createElement("div");

        campo.classList.add("skill");

        campo.innerHTML = `
            <input
                type="text"
                list="lista-pericias-disponiveis"
                value="${pericia.nome || pericia}"
                placeholder="Escolha uma perícia"
            >

            <select>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        `;

        lista.appendChild(campo);

        // Se estiver carregando uma perícia salva,
        // restaura também o valor dela.
        if (typeof pericia === "object") {
            campo.querySelector("select").value = pericia.valor;
        }
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

    const espacos = document.querySelectorAll(".espaco-inventario");

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

function adicionarArma(dados = null) {

    const lista = document.getElementById("lista-armas");

    const arma = document.createElement("div");

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
                placeholder="Descreva aparência da arma, ou algum efeito que ela possa ter."
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
        arma.querySelector(".nome-arma").value = dados.nome;
        arma.querySelector(".dano-arma").value = dados.dano;
        arma.querySelector(".critico-arma").value = dados.critico;
        arma.querySelector(".espaco-inventario").value = dados.espaco;
        arma.querySelector(".descricao-arma").value = dados.descricao || "";
    }
    const campoEspaco = arma.querySelector(".espaco-inventario");

    arma.querySelector(".button-remover").addEventListener("click", () => {
        arma.remove();
        atualizarInventario();
    });

    campoEspaco.addEventListener("input", atualizarInventario);
    atualizarInventario();
}

function adicionarItem(dados = null){
    const lista = document.getElementById("lista-itens");
    const item = document.createElement("div");

    item.classList.add("inventory-items");
    item.innerHTML = `
        <div class="field">

            <label>Nome do item</label>

            <input
                class="nome-item"
                type="text"
                placeholder="Ex: Corda"
            >

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
    if (dados) {
        item.querySelector(".nome-item").value = dados.nome;
        item.querySelector(".espaco-inventario").value = dados.espaco;
        item.querySelector(".descricao-item").value = dados.descricao;
    }
    const campoEspaco = item.querySelector(".espaco-inventario");
    campoEspaco.addEventListener("input", atualizarInventario);
    atualizarInventario();
}

function adicionarHabilidade(dados = null) {

    const lista = document.getElementById("lista-habilidades");

    const habilidade = document.createElement("div");

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

    if (dados) {
        habilidade.querySelector(".nome-habilidade").value =
            dados.nome;

        habilidade.querySelector(".custo-habilidade").value =
            dados.custo;

        habilidade.querySelector(".efeito-habilidade").value =
            dados.efeito;

        habilidade.querySelector(".descricao-habilidade").value =
            dados.descricao;
    }

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
        mostrarAlerta("PE Insuficiente!", "Você não possui PE suficiente para usar esta habilidade.");
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

    const periciasOrigem = [];

    document
        .querySelectorAll("#pericias-origem .skill")
        .forEach(skill => {

            const nome =
                skill.querySelector("input").value;

            const valor =
                skill.querySelector("select").value;

            periciasOrigem.push({
                nome: nome,
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
        origem: periciasOrigem,
        adicionais: periciasAdicionais
    };
}

function coletarHabilidades() {
    const habilidades = [];

    document
    .querySelectorAll("#lista-habilidades .ability")
    .forEach(habilidade => {
        habilidades.push({
            nome: habilidade.querySelector(".nome-habilidade").value,
            custo: habilidade.querySelector(".custo-habilidade").value,
            efeito: habilidade.querySelector(".efeito-habilidade").value,
            descricao: habilidade.querySelector(".descricao-habilidade").value
        });
    });
    return habilidades;
}

function coletarArmas(){
    const armas = [];

    document
    .querySelectorAll("#lista-armas .inventory-item")
    .forEach(arma => {
        armas.push({
            nome: arma.querySelector(".nome-arma").value,
            dano: arma.querySelector(".dano-arma").value,
            critico: arma.querySelector(".critico-arma").value,
            espaco: arma.querySelector(".espaco-inventario").value,
            descricao: arma.querySelector(".descricao-arma").value
        });
    });
    return armas;
}

function coletarItens() {

    const itens = [];

    document
        .querySelectorAll("#lista-itens .inventory-items")
        .forEach(item => {

            itens.push({
                nome: item.querySelector(".nome-item").value,
                espaco: item.querySelector(".espaco-inventario").value,
                descricao: item.querySelector(".descricao-item").value
            });
        });

    return itens;
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

    pericias.iniciais?.forEach((pericia, index) => {

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

    pericias.adicionais?.forEach((pericia, index) => {

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

function carregarHabilidades(habilidades) {
    if (!habilidades){
        return;
    }
    const lista = document.getElementById("lista-habilidades");

    lista.innerHTML = "";

    habilidades.forEach(habilidade => {
        adicionarHabilidade(habilidade);
    });
}

function carregarArmas(armas) {

    if (!armas) {
        return;
    }

    const lista = document.getElementById("lista-armas");

    lista.innerHTML = "";

    armas.forEach(arma => {
        adicionarArma(arma);
    });

    atualizarInventario();
}

function carregarItens(itens) {

    if (!itens) {
        return;
    }

    const lista = document.getElementById("lista-itens");

    lista.innerHTML = "";

    itens.forEach(item => {
        adicionarItem(item);
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

        anotacoes: document.querySelector(".anotacoes").value,

        pericias: coletarPericias(),

        habilidades: coletarHabilidades(),

        armas: coletarArmas(),
        itens: coletarItens()
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
    campoOrigem.dispatchEvent(new Event("change"));
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
    carregarPericiasOrigem(ficha.pericias.origem)
    carregarHabilidades(ficha.habilidades);
    carregarArmas(ficha.armas);
    carregarItens(ficha.itens);
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
    "Domar",
    "Ciências",
    "Pilotagem",
    "Ritualismo",
    "Religião"
];

const armas = [

];

const itens = [
    
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
const campoOrigem = document.getElementById("origem");
campoOrigem.addEventListener("change", () => {
    carregarPericiasOrigem();
});
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

const origens = {

    "Acadêmico estudioso": {
        pericias: [
            "Documentos",
            "Investigação"
        ]
    },

    "Amaldiçoado fortalecido": {
        pericias: [
            "Resistir",
            "Sobrevivência"
        ]
    },

    "Amigo dos animais": {
        pericias: [
            "Domar",
            "Percepção"
        ]
    },

    "Amnésico": {
        pericias: [
            "",
            ""
        ]
    },

    "Artista de rua": {
        pericias: [
            "Enganação",
            "Intuição"
        ]
    },

    "Atleta": {
        pericias: [
            "Atletismo",
            "Reflexos"
        ]
    },

    "Ator/Atriz": {
        pericias: [
            "Enganação",
            "Sedução"
        ]
    },

    "Criminoso": {
        pericias: [
            "Crime",
            "Furtividade"
        ]
    },

    "Enfermeiro": {
        pericias: [
            "Medicina",
            "Sobrevivência"
        ]
    },

    "Engenheiro": {
        pericias: [
            "Ciências",
            "Ofício"
        ]
    },

    "Escritor": {
        pericias: [
            "Documentos",
            "Ofício"
        ]
    },

    "Espadachim": {
        pericias: [
            "Combate",
            "Iniciativa"
        ]
    },

    "Estilista": {
        pericias: [
            "Enganação",
            "Sedução"
        ]
    },

    "Inventor": {
        pericias: [
            "Ofício",
            "Tecnologia"
        ]
    },

    "Investigador Paranormal": {
        pericias: [
            "Investigação",
            "Percepção"
        ]
    },

    "Jornalista": {
        pericias: [
            "Diplomacia",
            "Investigação"
        ]
    },

    "Lutador": {
        pericias: [
            "Combate",
            "Reflexos"
        ]
    },

    "Mecânico de armas": {
        pericias: [
            "Ofício",
            "Pilotagem"
        ]
    },

    "Médico": {
        pericias: [
            "Medicina",
            "Ciências"
        ]
    },

    "Ocultista arrependido": {
        pericias: [
            "Ritualismo",
            "Intuição"
        ]
    },

    "Policial/Segurança": {
        pericias: [
            "Intimidação",
            "Pontaria"
        ]
    },

    "Prodígio": {
        pericias: [
            "Ritualismo",
            "Ofício"
        ]
    },

    "Professor": {
        pericias: [
            "Diplomacia",
            "Investigação"
    },

    "Prometido": {
        pericias: [
            "Ritualismo",
            "Religião"
        ]
    },

    "Rato de laboratório": {
        pericias: [
            "Atletismo",
            "Combate"
        ]
    },

    "Religioso": {
        pericias: [
            "Religião",
            "Diplomacia"
        ]
    },

    "Selado marcado": {
        pericias: [
            "Fortificação",
            ""
        ]
    },

    "Sobrevivente anormal": {
        pericias: [
            "Ofício",
            "Sobrevivência"
        ]
    },

    "Soldado militar": {
        pericias: [
            "Iniciativa",
            "Pontaria"
        ]
    },

    "T.I": {
        pericias: [
            "Tecnologia",
            "Intuição"
        ]
    }

};

preencherLista("lista-origens", Object.keys(origens))

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