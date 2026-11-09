export function mostrarAlerta(titulo, mensagem) {
    const modal =
        document.getElementById("modal-alerta");

    if (!modal) return;

    modal.querySelector("h3").textContent = titulo;
    modal.querySelector("p").textContent = mensagem;

    modal.style.display = "flex";
}


export function fecharAlerta() {
    const modal =
        document.getElementById("modal-alerta");

    if (!modal) return;

    modal.style.display = "none";
}