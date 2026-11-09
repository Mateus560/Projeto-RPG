export function renderizarTrilha(nomeTrilha, trilha, container) {
    container.classList.add("card-trilha");
    container.innerHTML = "";

    const titulo = document.createElement("h1");
    titulo.textContent = nomeTrilha;
    container.appendChild(titulo);

    const descricao = document.createElement("p");
    descricao.textContent = trilha.descricao;
    container.appendChild(descricao);

    trilha.poderes.forEach(poder => {
        const card = document.createElement("div");
        card.classList.add("card-trilha");

        card.innerHTML = `
            <span class="epeem-trilha">${poder.epeem}% EPEEM</span>
            <h2>${poder.nome}</h2>
            <p>${poder.descricao}</p>
        `;

        container.appendChild(card);
    });
}