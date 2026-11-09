const CHAVE_FICHA = "ficha-personagem";

export function lerFichaSalva() {
    const conteudo = localStorage.getItem(CHAVE_FICHA);

    if (!conteudo) return null;

    try {
        const ficha = JSON.parse(conteudo);

        if (!ficha || typeof ficha !== "object" || Array.isArray(ficha)) {
            return null;
        }

        return ficha;
    } catch (erro) {
        console.error("Não foi possível ler a ficha salva.", erro);
        return null;
    }
}

export function gravarFicha(ficha) {
    localStorage.setItem(CHAVE_FICHA, JSON.stringify(ficha));
}

export function gravarDadosFicha(dados) {
    const fichaAtual = lerFichaSalva() || {};
    const fichaAtualizada = { ...fichaAtual, ...dados };

    gravarFicha(fichaAtualizada);
    return fichaAtualizada;
}
