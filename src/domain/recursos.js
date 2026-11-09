export function alterarRecurso(id, valor) {
    const input = document.getElementById(id);

    if (!input) return;

    const tipo = id.replace("-atual", "");

    const maximoElemento = document.getElementById(`${tipo}-max`);

    if (!maximoElemento) return;

    input.value = limitarValorRecurso(
        (Number(input.value) || 0) + Number(valor || 0),
        Number(maximoElemento.textContent) || 0
    );
}

function limitarValorRecurso(valor, maximo) {
    return Math.min(Math.max(0, valor), Math.max(0, maximo));
}

export function receberDano(idRecurso, idCampo) {
    const campo = document.getElementById(idCampo);
    if (!campo) return;

    alterarRecurso(idRecurso, -(Number(campo.value) || 0));
    campo.value = "";
}

export function receberCura(idRecurso, idCampo) {
    const campo = document.getElementById(idCampo);
    if (!campo) return;

    alterarRecurso(idRecurso, Number(campo.value) || 0);
    campo.value = "";
}

export function limitarRecursoAtual(id) {
    const campo = document.getElementById(id);

    if (!campo) return;

    campo.addEventListener("input", () => {
        const tipo = id.replace("-atual", "");

        const maximoElemento =
            document.getElementById(`${tipo}-max`);

        if (!maximoElemento) return;

        campo.value = limitarValorRecurso(
            Number(campo.value) || 0,
            Number(maximoElemento.textContent) || 0
        );
    });
}
