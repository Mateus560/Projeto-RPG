export function alterarRecurso(id, valor) {
    const input = document.getElementById(id);

    if (!input) return;

    const tipo = id.replace("-atual", "");

    const maximoElemento = document.getElementById(`${tipo}-max`);

    if (!maximoElemento) return;

    const maximo = Number(maximoElemento.textContent);

    let atual = Number(input.value) || 0;

    atual += valor;

    atual = Math.max(0, atual);
    atual = Math.min(maximo, atual);

    input.value = atual;
}


export function receberDano() {
    const danoPv =
        Number(document.getElementById("dano-pv")?.value) || 0;

    const danoSanidade =
        Number(document.getElementById("dano-sanidade")?.value) || 0;

    alterarRecurso("vida-atual", -danoPv);
    alterarRecurso("sanidade-atual", -danoSanidade);

    document.getElementById("dano-pv").value = "";
    document.getElementById("dano-sanidade").value = "";
}


export function limitarRecursoAtual(id) {
    const campo = document.getElementById(id);

    if (!campo) return;

    campo.addEventListener("input", () => {
        const tipo = id.replace("-atual", "");

        const maximoElemento =
            document.getElementById(`${tipo}-max`);

        if (!maximoElemento) return;

        const maximo = Number(maximoElemento.textContent);

        let valor = Number(campo.value) || 0;

        valor = Math.max(0, valor);
        valor = Math.min(maximo, valor);

        campo.value = valor;
    });
}