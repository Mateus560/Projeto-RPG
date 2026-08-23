import classes from "../data/classes.js";
import origens from "../data/origens.js";

export function carregarPericiasIniciais() {
    const campoClasse = document.getElementById("classe");
    const lista = document.getElementById("pericias-iniciais");
    
    const classe = campoClasse.value;

    if (!lista) return;

    lista.innerHTML = "";

    if (!classes[classe]) return;

    const pericias =
        classes[classe].periciasIniciais || [];

    pericias.forEach(pericia => {
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


export function carregarPericiasOrigem(periciasSalvas = null) {
    const campoOrigem = document.getElementById("origem");
    const lista =
        document.getElementById("pericias-origem");

    if (!lista) return;

    lista.innerHTML = "";

    const origem = campoOrigem.value;

    if (!origens[origem]) return;

    const pericias =
        periciasSalvas || origens[origem].pericias;

    pericias.forEach(pericia => {
        const campo = document.createElement("div");

        campo.classList.add("skill");

        const nome =
            typeof pericia === "object"
                ? pericia.nome
                : pericia;

        campo.innerHTML = `
            <input
                type="text"
                list="lista-pericias-disponiveis"
                value="${nome}"
                placeholder="Escolha uma perícia"
            >

            <select>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        `;

        lista.appendChild(campo);

        if (typeof pericia === "object") {
            campo.querySelector("select").value =
                pericia.valor;
        }
    });
}


export function criarSlotsPericias() {
    const campoClasse = document.getElementById("classe")
    const lista =
        document.getElementById("lista-pericias");

    if (!lista) return;

    const classe = campoClasse.value;

    if (!classes[classe]) {
        lista.innerHTML = "";
        return;
    }

    const conhecimento =
        Number(
            document.getElementById("conhecimento").value
        ) || 0;

    const limite =
        classes[classe].limitePericias +
        conhecimento;

    const slots =
        lista.querySelectorAll(".skill");

    const slotsAtuais = slots.length;

    for (let i = slotsAtuais; i < limite; i++) {
        const campo =
            document.createElement("div");

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

    if (slotsAtuais > limite) {
        const todos =
            lista.querySelectorAll(".skill");

        for (
            let i = todos.length - 1;
            i >= limite;
            i--
        ) {
            todos[i].remove();
        }
    }
}


export function coletarPericias() {
    const periciasIniciais = [];

    document
        .querySelectorAll("#pericias-iniciais .skill")
        .forEach(skill => {
            const campos =
                skill.querySelectorAll("input, select");

            const valor =
                skill.querySelector("select:last-child")?.value;

            periciasIniciais.push({
                nome: campos[0]?.value || "",
                valor: valor || "5"
            });
        });


    const periciasOrigem = [];

    document
        .querySelectorAll("#pericias-origem .skill")
        .forEach(skill => {
            periciasOrigem.push({
                nome:
                    skill.querySelector("input")?.value || "",

                valor:
                    skill.querySelector("select")?.value || "5"
            });
        });


    const periciasAdicionais = [];

    document
        .querySelectorAll("#lista-pericias .skill")
        .forEach(skill => {
            periciasAdicionais.push({
                nome:
                    skill.querySelector("input")?.value || "",

                valor:
                    skill.querySelector("select")?.value || "5"
            });
        });


    return {
        iniciais: periciasIniciais,
        origem: periciasOrigem,
        adicionais: periciasAdicionais
    };
}


export function carregarPericias(pericias) {
    if (!pericias) return;

    const iniciais =
        document.querySelectorAll(
            "#pericias-iniciais .skill"
        );

    pericias.iniciais?.forEach((pericia, index) => {
        const skill = iniciais[index];

        if (!skill) return;

        const campos =
            skill.querySelectorAll("input, select");

        campos[0].value = pericia.nome;
        campos[campos.length - 1].value =
            pericia.valor;
    });


    const adicionais =
        document.querySelectorAll(
            "#lista-pericias .skill"
        );

    pericias.adicionais?.forEach((pericia, index) => {
        const skill = adicionais[index];

        if (!skill) return;

        skill.querySelector("input").value =
            pericia.nome;

        skill.querySelector("select").value =
            pericia.valor;
    });
}