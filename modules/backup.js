export function exportarFicha() {
    const dados = localStorage.getItem("ficha-personagem");

    if (!dados) {
        alert("Nenhuma ficha encontrada.");
        return;
    }

    const ficha = JSON.parse(dados);

    const arquivo = new Blob(
        [JSON.stringify(ficha, null, 4)],
        {type: "application/json"}
    );

    const url = URL.createObjectURL(arquivo);

    const link = document.createElement("a");

    link.href = url;
    link.download = "ficha-personagem.json";
    
    link.click();

    URL.revokeObjectURL(url);
}

export async function importarFicha(arquivo) {
    if (!arquivo) return;

    try {
        const texto = await arquivo.text();
        const ficha = JSON.parse(texto);

        if (
            typeof ficha !== "object" ||
            ficha === null ||
            Array.isArray(ficha) ||
            typeof ficha.nome !== "string"
        ) {
            throw new Error("Arquivo inválido.");
        }

        const confirmar = window.confirm(
            "Importar esta ficha substituirá os dados atuais. Deseja continuar?"
        );

        if (!confirmar) return;

        localStorage.setItem(
            "ficha-personagem",
            JSON.stringify(ficha)
        );

        alert("Ficha importada com sucesso!");

        window.location.reload();

    } catch (erro) {
        alert(
            "Não foi possível importar a ficha. Verifique o arquivo."
        );

        console.error(erro);
    }
}