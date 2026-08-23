const almas = {
    "Alma Necrótica - Aceitação": {
        descricao:
            "Aqueles que carregam esta alma compreendem que todas as coisas possuem um fim. Não significa desejar a morte, mas aceitar perdas, mudanças e encerramentos sem permitir que eles destruam aquilo que ainda pode ser construído.",
        afinidade_elemental: "Morte",
        antonimo:
            "Apego. A incapacidade de aceitar o fim, agarrando-se ao que já morreu, ao que já acabou ou àquilo que nunca poderá voltar.",
        poder:
            "Eco do Fim: Ao receber dano fatal pela primeira vez em um combate ou cena, você sobrevive com 1 PV. (Uma vez por missão.)"
    },

    "Alma Pestilência Resiliência": {
        descricao:
            "Aqueles que carregam esta alma sabem sobreviver à deterioração. Mesmo quando tudo ao seu redor apodrece, encontram uma maneira de continuar existindo. São capazes de transformar dificuldades em experiência e crescer através das próprias adversidades.",
        afinidade_elemental: "Pestilência",
        antonimo:
            "Estagnação. A incapacidade de mudar ou se adaptar, permitindo que a deterioração consuma lentamente tudo aquilo que existe.",
        poder:
            "Sobrevivência Degenerativa: Toda vez que você ficar Machucado, recupera 1 PE no início do seu turno. Ao atingir 50% ou menos dos PV, recupera 1d3 PE em vez disso."
    },

    "Alma Áurica - Ambição": {
        descricao:
            "Aqueles que carregam esta alma nunca aceitam que seus limites atuais sejam definitivos. Buscam conhecimento, poder e aperfeiçoamento constantemente, acreditando que sempre existe algo além daquilo que já alcançaram.",
        afinidade_elemental: "Áurico",
        antonimo:
            "Complacência. A satisfação absoluta com aquilo que já possui, recusando-se a evoluir porque acredita que não há mais nada a conquistar.",
        poder:
            "Ganância Mecânica: Toda vez que você matar ou executar um inimigo, recupera 1d12 PV e recebe +2 em todos os testes por uma quantidade de turnos igual ao seu maior atributo."
    },

    "Alma Desesperada - Coragem": {
        descricao:
            "Aqueles que carregam esta alma conhecem o medo, mas não permitem que ele determine suas escolhas. A verdadeira coragem não é ignorar o perigo, mas continuar avançando mesmo quando se compreende exatamente o que pode acontecer.",
        afinidade_elemental: "Desespero",
        antonimo:
            "Covardia. Permitir que o medo controle completamente suas decisões, fazendo com que a própria possibilidade de fracasso seja suficiente para impedir qualquer ação.",
        poder:
            "Última Chance: Caso consiga uma falha crítica em um teste que não seja de combate e que levaria à sua morte, você sobrevive com PV igual ao seu maior atributo. Caso não seja dano fatal, reduz o dano sofrido em valor igual ao seu maior atributo."
    },

    "Alma Aflita - Autenticidade": {
        descricao:
            "Aqueles que carregam esta alma não escondem aquilo que sentem. Sua paixão, raiva, amor e sofrimento são intensos, mas genuínos. Eles não têm medo de se entregar completamente àquilo que consideram importante.",
        afinidade_elemental: "Agonia",
        antonimo:
            "Apatia. A perda da capacidade de sentir intensamente, tornando-se indiferente diante da dor, da alegria, das pessoas e até mesmo da própria existência.",
        poder:
            "Fagulha da Tormenta: Ao receber dano crítico, você causa metade do dano sofrido para quem realizou o ataque. (Uma vez por alvo.)"
    },

    "Alma Culpada - Responsabilidade": {
        descricao:
            "Aqueles que carregam esta alma reconhecem seus próprios erros. Em vez de fugir das consequências de suas escolhas, aceitam o peso delas e procuram reparar aquilo que causaram.",
        afinidade_elemental: "Culpa",
        antonimo:
            "Negação. Recusar-se a reconhecer os próprios erros, transferindo a culpa para outras pessoas ou fingindo que suas ações nunca aconteceram.",
        poder:
            "Peso Compartilhado: Efeitos negativos não paranormais ou mentais duram 1 turno a menos em você, enquanto os seus duram 1 turno a mais. Você não pode cair ou morrer exclusivamente devido a efeitos de Status negativos, independente de sua origem."
    },

    "Alma Ensanguentada - Justiça": {
        descricao:
            "Aqueles que carregam esta alma acreditam que toda ação possui uma consequência. Sua força não existe simplesmente para destruir, mas para impedir que aqueles que causam sofrimento permaneçam impunes.",
        afinidade_elemental: "Punição",
        antonimo:
            "Vingança. Aqueles que abandonam a justiça não buscam equilíbrio ou reparação, mas retribuição pessoal. A vingança não se importa com o que é justo, apenas com fazer o outro sofrer pelo sofrimento que causou. Onde a Justiça pergunta “qual consequência é merecida?”, a Vingança pergunta apenas “quanto você deve sofrer?”. ",
        poder:
            "Cura Acelerada: Regenera 1d4 PV no início de cada um de seus turnos."
    }
};

export default almas;