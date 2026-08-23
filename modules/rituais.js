export function adicionarRitual(dados = null) {
    const lista =
        document.getElementById("lista-ritual");

    if (!lista) return;

    const ritual =
        document.createElement("div");

    ritual.classList.add("rituais");

    ritual.innerHTML = `
        <div class="field">
            <label>Nome do Ritual</label>

            <input
                class="nome-ritual"
                type="text"
                placeholder="Nome do Ritual"
            >
        </div>

        <div class="field">
            <label>Custo em PE</label>

            <select class="custo-ritual">
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="10">10</option>
            </select>
        </div>

        <div class="field">
            <label>Duração</label>

            <input
                class="duracao-ritual"
                type="text"
                list="duracoes-rituais"
                placeholder="Ex: Cena"
            >
        </div>

        <div class="field">
            <label>Execução</label>

            <input
                class="execucao-ritual"
                type="text"
                list="execucoes-rituais"
                placeholder="Ex: Padrão"
            >
        </div>

        <div class="field">
            <label>Alcance</label>

            <input
                class="alcance-ritual"
                type="text"
                list="alcances-rituais"
                placeholder="Ex: Curto"
            >
        </div>

        <div class="field">
            <label>Alvo</label>

            <input
                class="alvo-ritual"
                type="text"
                list="alvos-rituais"
                placeholder="Ex: 1 ser"
            >
        </div>

        <div class="field">
            <label>Descrição</label>

            <textarea
                class="descricao-ritual"
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

    lista.appendChild(ritual);

    if (dados) {
        ritual.querySelector(".nome-ritual").value =
            dados.nome || "";

        ritual.querySelector(".custo-ritual").value =
            dados.custo || 1;

        ritual.querySelector(".duracao-ritual").value =
            dados.duracao || "";

        ritual.querySelector(".execucao-ritual").value =
            dados.execucao || "";

        ritual.querySelector(".alcance-ritual").value =
            dados.alcance || "";

        ritual.querySelector(".alvo-ritual").value =
            dados.alvo || "";

        ritual.querySelector(".descricao-ritual").value =
            dados.descricao || "";
    }

    ritual.querySelector(".usar-habilidade")
        .addEventListener("click", () => {
            usarHabilidade(ritual);
        });

    ritual.querySelector(".button-remover")
        .addEventListener("click", () => {
            ritual.remove();
        });
}


export function coletarRituais() {
    const rituais = [];

    document
        .querySelectorAll("#lista-ritual .rituais")
        .forEach(ritual => {
            rituais.push({
                nome:
                    ritual.querySelector(".nome-ritual").value,

                custo:
                    ritual.querySelector(".custo-ritual").value,

                duracao:
                    ritual.querySelector(".duracao-ritual").value,

                execucao:
                    ritual.querySelector(".execucao-ritual").value,

                alcance:
                    ritual.querySelector(".alcance-ritual").value,

                alvo:
                    ritual.querySelector(".alvo-ritual").value,

                descricao:
                    ritual.querySelector(".descricao-ritual").value
            });
        });

    return rituais;
}


export function carregarRituais(rituais) {
    if (!rituais) return;

    const lista =
        document.getElementById("lista-ritual");

    lista.innerHTML = "";

    rituais.forEach(adicionarRitual);
}