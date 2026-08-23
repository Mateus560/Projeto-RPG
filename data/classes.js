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
        periciasIniciais: [],
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
            "Ritualismo",
            "Resistir"
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
            "Ritualismo",
            "Religião"
        ],
        limitePericias: 3
    }
};

export default classes;