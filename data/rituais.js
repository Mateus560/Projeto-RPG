const rituais = {
    "Estouro Térmico": {
        elemento: "Agonia",
        circulo: 1,
        patrono: "Vrak, o Núcleo Furioso",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "1 ser",
        duracao: "Instantânea",
        resistencia: "Teste de Agilidade vs Ritualismo do Usuário, reduz metade do dano caso vença.",
        descricao: "Você canaliza o calor selvagem da Agonia para superaquecer instantaneamente o sangue do alvo. O alvo sofre dano direto 2d6 de queimadura interna devido à dor súbita e ao pico de adrenalina. Se você estiver sob efeito de status, cause +1 dado de dano.",
        discente: {
            custo: 2,
            efeito: "Muda o alvo para área (raio de 3m). Todos na área sofrem dano. Para cada turno de duração de efeito de status negativo, aumente o alcance do ritual em 0,5 metros.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Muda o alcance para Longo. O calor é tão intenso que ignora resistências do elemento. Aumenta o alcance de 0,5 para 1 metro, e os efeitos positivos também contribuem para a área de efeito do ritual.",
            requisito: "3º círculo e Afinidade com Agonia"
        }
    },

    "Pele de Brasas": {
        elemento: "Agonia",
        circulo: 1,
        patrono: "Agnis, o Profano Lança-Chamas",
        execucao: "Padrão",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "1 Cena ou até ser desativado",
        descricao: "Sua temperatura corporal eleva-se a níveis perigosos, criando uma aura de calor que queima quem ousa tocá-lo. Qualquer ser que toque em você ou que seja atingido por um ataque corpo a corpo seu sofre dano de Agonia. Você sofre 1d6 de dano de Agonia no início de cada turno.",
        discente: {
            custo: 2,
            efeito: "A aura expande-se para 2 metros. O dano refletido aumenta para 2d6. O dano que você sofre por turno é reduzido para 1 ponto fixo, mas você fica vulnerável a efeitos de frio/água.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "A aura expande-se para 3 metros. Qualquer ser que iniciar o turno adjacente sofre dano automaticamente. O dano que você sofre por turno torna-se 2d6, mas você ganha bônus no próximo teste de ataque ou ritual equivalente ao dano recebido das Chamas.",
            requisito: "3º círculo e Afinidade com Agonia"
        }
    },

    "Chama da Vontade": {
        elemento: "Agonia",
        circulo: 1,
        patrono: "Distrazhel, o Enganador",
        execucao: "Padrão",
        alcance: "Toque",
        alvo: "1 ser",
        duracao: "Instantânea",
        descricao: "O ritual remove todas as condições de status negativo do alvo e concede 1d6 de PV Temporário. O efeito não funciona em alvos Morrendo, Enlouquecendo ou Possuídos.",
        discente: {
            custo: 2,
            efeito: "Muda o alcance para Curto e o alvo para alvos escolhidos. Limpa status e cura múltiplos aliados à distância simultaneamente, aumentando a cura para 2d6.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Muda o alcance para Pessoal e o alvo para você e aliados em alcance curto. Remove status, cura moderadamente e concede imunidade a novos status por 3 rodadas. Um aliado Enlouquecendo é estabilizado e volta a 1 de sanidade.",
            requisito: "3º círculo e Afinidade com Agonia"
        }
    },

    "Ao Acaso": {
        elemento: "Agonia",
        circulo: 1,
        patrono: "Fortunae, o Dado do Sofrimento",
        execucao: "Padrão",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "5 testes",
        descricao: "Role 5d20+INF e organize os resultados do menor para o maior. Seus próximos 5 testes usarão obrigatoriamente esses valores nessa ordem.",
        discente: {
            custo: 2,
            efeito: "Muda o alvo para 1 ser tocado. Você pode escolher usar a sequência do menor para o maior ou do maior para o menor.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Muda o alvo para você e aliados em alcance Curto. Role 10d20 criando uma pilha compartilhada; todos os aliados consomem os números da pilha.",
            requisito: "3º círculo"
        }
    },

    "Peso da Penitência": {
        elemento: "Culpa",
        circulo: 1,
        patrono: "Eresh, o Juiz Acorrentado",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "1 ser",
        duracao: "Cena",
        descricao: "Correntes espectrais surgem ao redor do corpo do alvo, formadas por fragmentos de suas próprias lembranças e arrependimentos. O alvo sofre –5 em testes de ataque.",
        discente: {
            custo: 2,
            efeito: "A penalidade aumenta para –10 e o deslocamento do alvo é reduzido em 3m.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "A penalidade permanece em –10, mas sempre que o alvo errar um ataque, as correntes causam 1d6 de dano de Culpa. Afeta seres escolhidos.",
            requisito: "3º círculo e Afinidade com Culpa"
        }
    },

    "Correntes do Remorso": {
        elemento: "Culpa",
        circulo: 1,
        patrono: "Mourne, a Santa Congelada",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "1 ser",
        duracao: "Cena",
        descricao: "Correntes espectrais prendem os membros do alvo ao chão. Seu deslocamento é reduzido em 3m. Sempre que tentar se deslocar voluntariamente mais de 4m em um turno, deve realizar um teste de Fortitude.",
        discente: {
            custo: 2,
            efeito: "O alvo sofre –5 em testes para escapar de efeitos de agarrar, imobilizar ou restrição.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Após falhar duas vezes no teste de Fortitude, o alvo fica Imobilizado por 1 turno.",
            requisito: "3º círculo e Afinidade com Culpa"
        }
    },

    "Olhar da Condenação": {
        elemento: "Culpa",
        circulo: 1,
        patrono: "Ortheus, o Carrasco Cego",
        execucao: "Padrão",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "Cena",
        descricao: "Seus olhos passam a enxergar as correntes espirituais que ligam criaturas às suas ações. Você recebe +5 em Percepção e Investigação para identificar mentiras, contradições ou informações escondidas.",
        discente: {
            custo: 2,
            efeito: "O bônus aumenta para +10. Você também percebe quando uma criatura está deliberadamente omitindo informações.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Após observar uma criatura por uma rodada, você pode identificar uma fraqueza comportamental ou emocional dela, recebendo +5 em testes realizados contra ela durante a cena.",
            requisito: "3º círculo"
        }
    },

    "Culpa Manifestada": {
        elemento: "Culpa",
        circulo: 1,
        patrono: "Avel, o Pecador Sem Nome",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "1 ser",
        duracao: "Cena",
        resistencia: "Resistir reduz o efeito pela metade.",
        descricao: "Você força o alvo a confrontar uma lembrança dolorosa de seu passado. Ele sofre –5 em testes de Resistir e testes Sociais. Cada falha gera 1 acúmulo de Culpa, até 3. Cada acúmulo reduz seu Deslocamento em 1m.",
        discente: {
            custo: 2,
            efeito: "Cada acúmulo também impõe –2 em testes de Rituais e Habilidades.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Ao alcançar 3 acúmulos, correntes de gelo prendem o alvo, deixando-o Imobilizado por 1 turno.",
            requisito: "3º círculo e Afinidade com Culpa"
        }
    },

    "Fragmento Culposo": {
        elemento: "Culpa",
        circulo: 1,
        patrono: "Kael, o Último Veredito",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "1 ser",
        duracao: "Cena",
        descricao: "Você cria uma corrente invisível entre o alvo e seus próprios erros. Sempre que ele falhar em um teste de defesa, sofre 1d6 de dano de Culpa. O efeito só pode causar dano uma vez por turno.",
        discente: {
            custo: 2,
            efeito: "O dano aumenta para 2d6. Sempre que ativado, o Deslocamento do alvo é reduzido em 2m até o início do próximo turno.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "O dano aumenta para 3d6. Se o alvo falhar três vezes durante a duração, fica Abalado até o final da cena.",
            requisito: "3º círculo"
        }
    },

    "Imolar": {
        elemento: "Punição",
        circulo: 1,
        execucao: "Ação Padrão",
        alcance: "Muito Curto",
        alvo: "1 Ser",
        duracao: "Instantâneo",
        resistencia: "Reflexos reduz à metade.",
        descricao: "Você utiliza o Punição do próprio alvo para machucá-lo, fazendo um sacrifício para a Besta de Punição. Cause 3d4+3 de dano de Punição e Sangramento I por 4 turnos.",
        discente: {
            custo: 2,
            efeito: "Cause 5d4+5 de dano de Punição, acerte até 2 seres adjacentes e torna-se capaz de acertar alvos sem sangue.",
            requisito: "2º círculo e 25% de EPEEM"
        },
        verdadeiro: {
            custo: 6,
            efeito: "Cause 8d4+8 de dano de Punição. Sangramento I torna-se Sangramento II por 6 turnos.",
            requisito: "Afinidade com Punição"
        }
    },

    "Aprendizado Doloroso": {
        elemento: "Punição",
        circulo: 1,
        execucao: "Ação Padrão",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "Instantâneo",
        descricao: "Você pode se atacar como sacrifício para conseguir bônus em uma perícia de sua escolha por 1 cena ao se acertar com a arma. Só pode ser usado 1 vez por atributo e 2 vezes por cena.",
        discente: {
            custo: 3,
            efeito: "Você pode colocar seu bônus em até 3 perícias e recupera 1d4 de vida.",
            requisito: "3º círculo"
        },
        verdadeiro: {
            custo: 6,
            efeito: "Você pode colocar o número do seu dano de forma completamente livre e recuperar 1d8 de PV.",
            requisito: "Punição III"
        }
    },

    "Projétil de Sangue": {
        elemento: "Punição",
        circulo: 1,
        execucao: "Ação Padrão",
        alcance: "Curto",
        alvo: "Até 3 seres",
        duracao: "Instantâneo",
        resistencia: "Fortificação ou Reflexos reduz metade.",
        descricao: "Você utiliza seu sangue como projétil, causando 2d4+2 de dano de Punição.",
        discente: {
            custo: 3,
            efeito: "O dano aumenta para 4d4+4 e causa Sangramento I por 3 turnos.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "O dano aumenta para 5d4+5, causa Sangramento I por 6 turnos e pode acertar seres que não possuem sangue.",
            requisito: "Afinidade com Punição"
        }
    },

    "Ferver Sangue": {
        elemento: "Punição",
        circulo: 1,
        execucao: "Padrão",
        alcance: "Toque",
        alvo: "1 Ser",
        duracao: "Cena",
        descricao: "Ao tocar em 1 ser, você ferve o sangue dele, aprimorando as suas capacidades físicas, e o mais importante, você o transforma numa besta violenta com sede de sangue que atacará todos os inimigos, mas cuidado, ele pode se virar contra você, ele sempre deverá atacar um alvo mesmo que seja você ou um aliado de vocês e se torna incapaz de raciocinar, mirar com armas de fogo, usar Rituais, Técnicas Espirituais, Furtividade e etc. Concede +3 em rolagens de dano e testes de ataque e se torna incapaz de receber lesões e cura 2 de vida a cada turno dele. Ao acabar o Ritual, recebe Exaustão II por 12 horas.",
        discente: {
            custo: 2,
            efeito: "O alvo recebe 5 de RD contra dano Perfurante, Impacto, Cortante e Tecnológico, pode utilizar 1 Ritual Ofensivo e fazer um ataque adicional.",
            requisito: "15% de EPEEM"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Bônus de ataque e dano tornam-se +5, cura 4 PV por turno e reduz pela metade ataques Perfurantes, de Impacto, Cortantes e Tecnológicos. Pode utilizar 2 Rituais Ofensivos.",
            requisito: "3º círculo e Afinidade com Punição"
        }
    },

    "Paixão Incessante": {
        elemento: "Punição",
        circulo: 1,
        execucao: "Reação",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "Instantâneo",
        resistencia: "Resistir cancela o efeito.",
        descricao: "Seduz um alvo por 1d4 turnos, fazendo-o atacar um alvo e proteger o Oráculo que conjurou até o efeito acabar.",
        discente: {
            custo: 2,
            efeito: "O alvo ataca por 1d6+1 turnos e recebe +2 em quaisquer testes. Você recebe +2 em seus testes enquanto durar.",
            requisito: "Punição I"
        },
        verdadeiro: {
            custo: 5,
            efeito: "O alvo ataca por 1d8+2 turnos e recebe +4 em quaisquer testes. Você recebe +4 em todos os seus testes e recupera 1 PV por turno.",
            requisito: "Punição II e 3º círculo"
        }
    },

    "Rasteira Sangrenta": {
        elemento: "Punição",
        circulo: 1,
        execucao: "Reação",
        alcance: "Corpo a Corpo (Pessoal)",
        alvo: "1 Ser em Alcance",
        duracao: "Instantâneo",
        resistencia: "Reflexos reduz pela metade o dano e evita Sangramento e Lesão na Perna.",
        descricao: "Você imbui sua perna ou arma com energia de Punição e realiza um ataque nas pernas. Cause dano da arma +1d4+2 de Punição, Sangramento I por 3 turnos e Lesão na Perna.",
        discente: {
            custo: 3,
            efeito: "Causa +3d4+3 de dano de Punição, aplica Sangramento II por 4 turnos e causa lesão grave na perna.",
            requisito: "2º círculo e 25% de EPEEM"
        },
        verdadeiro: {
            custo: 7,
            efeito: "Caso acerte o alvo 2 vezes, pode remover a perna do alvo. Cause +6d4+6 de dano de Punição e aplique Sangramento III.",
            requisito: "Afinidade com Punição e 4º círculo"
        }
    },

    "Reflexos Inumanos": {
        elemento: "Punição",
        circulo: 1,
        execucao: "Padrão",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "3 Turnos",
        descricao: "Seus reflexos são encantados pela sede de sangue. Você pode desviar de balas e contra-atacar atiradores ou Oráculos que utilizarem rituais Ofensivos contra você. Todo dano causado é convertido em Punição.",
        discente: {
            custo: 4,
            efeito: "Contra-ataques causam +2d6+2 de dano de Punição e você recebe +5 em testes de Contra-Ataque, Desviar ou Defender.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 6,
            efeito: "Cause +4d6+3 de dano de Punição e recupere 1d8 de vida por alvo acertado.",
            requisito: "Afinidade com Punição"
        }
    },

    "Resistência Não-Natural": {
        elemento: "Punição",
        circulo: 1,
        execucao: "Reação",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "Instantâneo",
        descricao: "Você deixa seu corpo fazer uma rápida evolução que diminui o dano da queda em 4d4+3 de Punição.",
        requisito: "2º círculo",
        discente: {
            custo: 3,
            efeito: "A redução aumenta para 8d6+4. Caso tenha um inimigo próximo, cause metade da redução como dano de Punição.",
            requisito: "Punição II, 3º círculo e uma técnica Espiritual de Anatomia"
        },
        verdadeiro: {
            custo: 7,
            efeito: "A redução torna-se 12d6+6. Ao cair próximo a um ser, cause o dano completo da redução como dano de Punição.",
            requisito: "4º círculo e Afinidade com Punição"
        }
    },

    "Lua Sangrenta": {
        elemento: "Iluminação",
        circulo: 1,
        execucao: "Completa",
        alcance: "Curto",
        alvo: "Esfera de 4 metros",
        duracao: "Instantâneo",
        resistencia: "Reflexos ou Fortificação reduz à metade.",
        descricao: "Você conjura um pedaço da Lua Sangrenta como um pequeno meteorito que atinge uma área, causando 2d8+2 de dano Astral. Em caso de falha, Sangramento II por 3 turnos; em caso de sucesso, Sangramento I por 2 turnos. Espalha Infecção Astral na área."
    },

    "Despedaçar Corpos Simples": {
        elemento: "Iluminação",
        circulo: 1,
        patrono: "Aureon, o Astro Faminto",
        execucao: "Padrão",
        alcance: "Pessoal",
        alvo: "1 ser",
        duracao: "Instantânea",
        resistencia: "Fortificação reduz à metade.",
        descricao: "Você concentra energia Astral no corpo de alguém, causando 3d8+3 de dano de Iluminação. Quem falhar também recebe 1 nível de Infecção Astral por 3 turnos. Você recebe 1 nível de Infecção Astral por 2 turnos.",
        discente: {
            custo: 2,
            efeito: "Dano aumenta para 5d8+5 e alcance passa para Médio. Infecção Astral dura 5 turnos.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Dano aumenta para 6d8+6. Falha em Fortitude deixa o alvo Debilitado até o início do próximo turno. Infecção dura 7 turnos.",
            requisito: "4º círculo e Infecção Astral no máximo"
        }
    },

    "Sorriso da Lua Sangrenta": {
        elemento: "Iluminação",
        circulo: 1,
        execucao: "Padrão",
        alcance: "Médio",
        alvo: "Esfera de 6 metros de raio",
        duracao: "Cena",
        descricao: "Você manifesta uma pequena Lua Sangrenta Sorridente sobre a área. Escolha 1 Elemento para aprimorar e 1 para enfraquecer. O aprimorado recebe +1 dado no principal efeito numérico e o enfraquecido recebe –1 dado.",
        discente: {
            custo: 2,
            efeito: "Área aumenta para 9 metros. Elemento aprimorado recebe +2 dados e enfraquecido –2 dados.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Área aumenta para 12 metros. Você pode escolher 2 Elementos para aprimorar e 2 para enfraquecer.",
            requisito: "3º círculo"
        }
    },

    "Sussurros Amorosos": {
        elemento: "Iluminação",
        circulo: 1,
        patrono: "Elyssara, a Estrela que Abraça",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "1 criatura",
        duracao: "Instantânea",
        descricao: "Uma voz além do céu envolve o alvo em luz púrpura e dourada. A criatura recupera 3d8+3 PV, ou 4d8+4 se estiver com menos da metade dos PV. Após a cura, recebe 1 nível de Infecção Astral por 6 turnos.",
        discente: {
            custo: 2,
            efeito: "Cura passa para 5d8+5 PV e Infecção Astral dura 9 turnos.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Cura passa para 7d8+7 PV. Infecção Astral dura 12 turnos."
        }
    },

    "Olhar do Abismo Celestial": {
        elemento: "Iluminação",
        circulo: 1,
        patrono: "Ithrael, Aquele que Observa as Estrelas",
        execucao: "Padrão",
        alcance: "Médio",
        alvo: "1 criatura",
        duracao: "1 rodada",
        descricao: "Um enorme olho formado por estrelas se abre sobre o alvo. Você sempre sabe sua localização, mesmo invisível, escondido ou atrás de cobertura. O próximo ataque contra ele recebe +5.",
        discente: {
            custo: 2,
            efeito: "Bônus passa para +10 e o alvo não pode receber benefícios de camuflagem ou invisibilidade contra você e seus aliados.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Até o final da cena, você permanece conectado ao alvo e consegue perceber sua localização por 1 dia inteiro.",
            requisito: "3º círculo"
        }
    },

    "Raio Astral": {
        elemento: "Iluminação",
        circulo: 1,
        patrono: "Asterion, o Anjo Sem Céu",
        execucao: "Padrão",
        alcance: "Médio",
        alvo: "1 criatura",
        duracao: "Instantânea",
        descricao: "Um feixe de luz cósmica atinge o alvo, causando 2d6+2 de dano de Iluminação e Infecção Astral I por 2 turnos. Se já estiver infectado, aumenta o nível em 1. Se estiver sob efeito paranormal negativo, sofre +1d6.",
        discente: {
            custo: 2,
            efeito: "Dano passa para 4d6+4. Se o alvo estiver sob condição paranormal, fica Enevoado por 2 turnos.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Dano passa para 6d6+6 e ignora 20 pontos de RD proveniente de efeitos paranormais.",
            requisito: "3º círculo e Afinidade com Iluminação"
        }
    },

    "Bênção das Estrelas": {
        elemento: "Iluminação",
        circulo: 1,
        patrono: "Caelus, o Pastor Celestial",
        execucao: "Padrão",
        alcance: "Toque",
        alvo: "1 criatura",
        duracao: "Cena",
        descricao: "O alvo recebe +5 em testes de Resistir e +2 em Defesa. Na primeira vez que seria reduzido a 0 PV, permanece com 1 PV. Após isso, o ritual termina e concede 1 marca permanente de Infecção Astral, até 3.",
        discente: {
            custo: 2,
            efeito: "Defesa aumenta para +5 e o alvo recebe 2d6 PV Temporários.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "Quando a bênção impedir o alvo de chegar a 0 PV, uma explosão causa 3d6 de dano de Iluminação às criaturas hostis adjacentes.",
            requisito: "3º círculo"
        }
    },

    "Contaminação Astral": {
        elemento: "Iluminação",
        circulo: 1,
        patrono: "Xyra, a Estrela Enferma",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "1 criatura",
        duracao: "3 turnos",
        resistencia: "Fortificação reduz o efeito e deixa a carga em apenas I.",
        descricao: "Uma pequena estrela negra penetra na carne do alvo. Ele recebe Infecção Astral II por 3 turnos. Se já estiver sob Infecção Astral II ou III, sofre 2d6 de dano de Iluminação.",
        discente: {
            custo: 2,
            efeito: "Duração passa para 5 turnos. Enquanto infectado, o alvo sofre –5 em Fortificação caso tente resistir.",
            requisito: "2º círculo"
        },
        verdadeiro: {
            custo: 5,
            efeito: "O alvo recebe Infecção Astral III imediatamente. Enquanto estiver nesse estágio, sempre que sofrer dano recebe +1d6 de dano de Iluminação uma vez por turno.",
            requisito: "3º círculo"
        }
    },

    "Fumaça Espessa": {
        elemento: "Medo",
        circulo: 1,
        alcance: "Cone em 3 metros na frente do usuário",
        alvo: "Todos que estiverem dentro do Cone",
        descricao: "Uma fumaça espessa sai de seus pulmões e causa 2d6+2 de dano de Medo e empurra todos dentro da área cônica em Metros equivalente ao seu maior atributo. Em alvos humanos isso causa Penumbra I por 2 turnos."
    },

    "Vel Enevoado": {
        elemento: "Medo",
        circulo: 1,
        patrono: "Ophthalmon, o Vigilante Eterno",
        execucao: "Padrão",
        alcance: "Curto, circular 3m",
        alvo: "Aliados em alcance curto",
        duracao: "2 turnos fora do círculo",
        descricao: "O ritual cria uma névoa sutil que 'fecha' parcialmente a visão espiritual dos aliados, protegendo-os do terror direto.Enquanto estiverem dentro da área do efeito, os alvos tornam-se imunes a quaisquer ônus ou penalidades causados por fobias. Além disso, recebem +5 em testes de Presença do Medo e +5 em testes de Resistência contra rituais que não causam dano direto aos Pontos de Vida (como controle mental, paralisia ou medo). Se um aliado sair da área do efeito, a proteção persiste por apenas 2 turnos antes de se dissipar completamente para aquele indivíduo.",

        discente: {
            custo: 2,
            efeito: "Muda o alcance para “Médio” e a área para “raio de 6m”. A duração do efeito residual ao sair do círculo aumenta para 1 cena inteira, independentemente da distância percorrida.",
            requisito: "2º círculo."
        },

        verdadeiro: {
            custo: 5,
            efeito: "Muda o alcance para “Pessoal” e o alvo para “você e todos os aliados em alcance Longo”. Em vez do normal, a névoa torna-se densa e visível apenas para os afetados. Além dos benefícios originais, os aliados afetados podem, uma vez por turno, ignorar completamente o resultado de um teste de resistência falho contra um ritual de Medo, tratando-o como um sucesso automático. A duração fora da área torna-se indefinida até o fim da cena, mesmo que se movam para longe do conjurador.",
            requisito: "3º círculo e afinidade com o elemento Medo"            
        }
    },

    "Venda Oculta": {
        elemento: "Medo",
        circulo: 1,
        patrono: "Ophthalmon, o Vigilante Etern",
        execucao: "Padrão",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "Cena",
        descricao: "O ritual confere a você percepção sobrenatural ao renunciar à visão física. Ao cobrir seus olhos (com uma venda real ou gesto simbólico), você se torna imune a qualquer efeito de cegueira física ou mental e ilusões visuais. Em troca, você enxerga o mundo como fluxos de energia espiritual, sendo capaz de identificar rastros espirituais e entidades invisíveis como se fossem objetos físicos brilhantes.",

        discente: {
            custo: 2,
            efeito: "Muda o alcance para “toque” e o alvo para “1 ser”. Você pode aplicar a venda em outra pessoa, concedendo a ela a visão espiritual e a imunidade à cegueira.",
            requisito: "2º círculo"
        },

        verdadeiro: {
            custo: 4,
            efeito: "Muda o alcance para “pessoal” e o alvo para “você”. Em vez do normal, você não precisa cobrir os olhos fisicamente. Você vê simultaneamente o plano físico e o espiritual, podendo enxergar através de obstáculos sólidos (paredes, portas) e detectar automaticamente qualquer ser não-físico ou ritual ativo em um raio de 30m, sem sofrer penalidades de distinção de detalhes.",
            requisito: "3º círculo"
        }
    },

    "Marca de Visão": {
        elemento: "Medo",
        circulo: 1,
        patrono: "Ophthalmon, o Vigilante Eterno",
        execucao: "Padrão",
        alcance: "Toque",
        alvo: "1 objeto ou ser",
        duracao: "Cena",
        resistencia: "Teste de Resistir DT 15+CON do usuário",
        descricao: "Teste de Resistir DT 15+CON do usuário. Se tocar um objeto inanimado, você o marca com o símbolo invisível de Ophthalmon. Enquanto o ritual durar, você (ou outro ser que você tocar) pode fechar os olhos e ver o ambiente exatamente da perspectiva do objeto marcado, como se tivesse olhos na superfície dele. O objeto não precisa ter olhos; a visão é mágica e abrange 360 graus se o objeto não tiver obstruções físicas. Se tocar um ser inteligente, você marca sua visão. Pelo resto da cena, você (ou outro ser que você tocar) pode ver através dos olhos do alvo marcado. O alvo percebe a invasão visual como um leve arrepio ou sombra no canto do olho. Se o alvo fechar os olhos, a visão compartilhada torna-se escura. Um alvo involuntário tem direito a um teste de Vontade para anular a marca.",

        discente: {
            custo: 2,
            efeito: "Muda o alcance para “curto” e o alvo para “alvos escolhidos”. Você pode marcar múltiplos objetos ou seres. Quem você tocar pode alternar a visão entre qualquer um dos alvos marcados à vontade.",
            requisito: "2º círculo"
        },

        verdadeiro: {
            custo: 5,
            efeito: "Muda o alcance para “pessoal” e o alvo para “você”. Em vez do normal, você não precisa tocar em ninguém para marcar. Você pode marcar qualquer objeto ou ser que possa ver dentro do seu alcance de visão. Além disso, você pode ver através de todas as marcas simultaneamente, dividindo sua atenção como se tivesse múltiplos olhos onipresentes.",
            requisito: "3º círculo"
        }
    },

    "Distorção Visual": {
        elemento: "Medo",
        circulo: 1,
        patrono: "Ophthalmon, o Vigilante Eterno",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "1 ser",
        duracao: "Cena ou até receber dano",
        resistencia: "Teste de Resistir DT 15+CON do usuário",
        descricao: "O ritual altera a percepção visual que os outros têm do alvo. Você pode modificar características físicas (rosto, corpo, roupas) ou fazê-lo parecer um objeto inanimado. A ilusão é apenas visual; sons e cheiros permanecem reais. Se o alvo agir de forma hostil, o efeito se desfaz para quem testemunhar. Alvos involuntários podem anular com um teste de Vontade.",

        discente: {
            custo: 2,
            efeito: "Muda o alvo para “alvos escolhidos”. Altera a aparência de múltiplos seres simultaneamente com uma ilusão coordenada. Altera o cheiro e o som que o alvo produz.",
            requisito: "2º círculo."
        },

        verdadeiro: {
            custo: 3, 
            efeito: "Muda o alcance para “Longo” e a Duração para “1 hora”. A ilusão inclui distorções superficiais de som e movimento. Só se desfaz se o alvo for tocado ou sofrer dano.",
            requisito: "3º círculo"
        }
    },

    "Compreensão Assombrosa": {
        elemento: "Medo",
        circulo: 1,
        patrono: "Rundarr O Decaído",
        execucao: "Padrão",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "Cena",
        descricao: "Se tocar um objeto impregnado de terror (uma arma de crime, um local de assassinato, um amuleto de maldição), você entende a 'história' do medo ligado a ele, percebendo como o pavor foi infligido e qual a natureza do trauma, mesmo sem ter testemunhado o evento. Se tocar uma pessoa (ou ser inteligente), você compreende profundamente o que mais a aterroriza no momento, permitindo que você se comunique com ela através da linguagem do medo (acalmando-a ou aterrorizando-a com precisão cirúrgica) como se compartilhassem esse sentimento. Se tocar um ser não inteligente (como um animal), você percebe seus instintos de preservação e pavor imediato, sabendo exatamente o que está causando medo a ele no ambiente. Um alvo involuntário tem direito a um teste de Resistência contra o seu Ritualismo para anular o efeito.",

        discente: {
            custo: 2,
            efeito: "Muda o alcance para “curto” e o alvo para “alvos escolhidos”. Você pode entender os medos de todos os alvos afetados simultaneamente.",
            requisito: "2º círculo"
        },

        verdadeiro: {
            custo: 5,
            efeito: "Muda o alcance para “pessoal” e o alvo para “você”. Em vez do normal, você pode sentir, interpretar e projetar qualquer tipo de medo humano (ou da sua campanha) à vontade. Você se torna um mestre em identificar fobias ocultas e pode induzir o medo que escolher em quem tocar, sem necessidade de teste de resistência inicial.",
            requisito: "3º círculo"
        }
    },

    "Banimento Espiritual": {
        elemento: "Medo",
        circulo: 1,
        patrono: "Kami, A Profana Controladora",
        execucao: "Padrão",
        alcance: "Curto", 
        alvo: "Área (raio de 3m)",
        duracao: "Cena",
        descricao: "Cria uma barreira invisível que bloqueia a passagem de seres não-físicos e anula qualquer ritual que tente cruzá-la. Os seres físicos atravessam livremente enquanto profanos e híbridos são incapazes de atravessar.",

        discente: {
            custo: 2,
            efeito: "Muda o alcance para 'Médio' e a área para 'raio de 6m'. A barreira torna-se visível e causa 3d4+4 de dano de medo a qualquer não-físico que tente tocá-la, empurrando-o para trás.",
            requisito: "2º círculo"
        },

        verdadeiro: {
            custo: 5,
            efeito: "Área muda para 'raio de 15m'. A barreira torna-se absoluta."
        }
    },

    "Corpo Intangível": {
        elemento: "Medo",
        circulo: 1,
        patrono: "Nihil, o Homem Entre as Paredes",
        execucao: "Padrão",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "Até 4 minutos",
        descricao: "Seu corpo perde parcialmente sua existência física, tornando-se translúcido e semelhante a uma sombra distorcida. Enquanto estiver sob o efeito, você pode atravessar até dois objetos ou estruturas sólidas, como paredes, portas ou pisos, desde que consiga alcançar o outro lado dentro da duração do ritual. Enquanto estiver atravessando uma estrutura, você não pode realizar ataques ou utilizar rituais que tenham como alvo seres fora dela. Se permanecer dentro de uma estrutura quando a duração terminar, seu corpo é violentamente expulso para o espaço desocupado mais próximo e você sofre 2d6 de dano de Sanidade.",

        discente: {
            custo: 2,
            efeito: "Você pode atravessar até quatro estruturas sólidas durante a duração e recebe +5 em testes de Furtividade enquanto estiver intangível.",
            requisito: "2º Círculo"
        },

        verdadeiro: {
            custo: 5,
            efeito: "Você pode permanecer intangível por até 10 minutos e atravessar qualquer quantidade de estruturas, desde que elas estejam fisicamente conectadas. Além disso, enquanto estiver completamente dentro de uma estrutura, você não pode ser percebido por meios físicos comuns. Se a duração terminar enquanto você estiver dentro de uma estrutura, o dano de Sanidade aumenta para 4d6.",
            requisito: "3º Círculo"
        }
    },

    "Explosão de Insetos": {
        elemento: "Pestilência",
        circulo: 1,
        patrono: "Entomonimus, Os Profanos Insetos",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "Um ser ou objeto",
        duracao: "Instantâneo",
        resistencia: "Fortificação Reduz à metade.",
        descricao: "Você é capaz de conjurar insetos explosivos com a ajuda de Entomonimus que possuem capacidades destrutivas ácidas. Você causa 2d6+2 de Dano Pestilento. Caso acerte um objeto tecnológico, ele parará de funcionar por 2 turnos.",

        discente: {
            custo: 2,
            efeito: "Seu dano aumenta para 4d6+4, o alcance torna-se médio e você causa Faminto I por 2 turnos no alvo.",
            requisito: "2º Círculo"
        },

        verdadeiro: {
            custo: 5,
            efeito: "Muda “Alvo” para Até 3 Seres ou Objetos. Muda o dano para 6d6+6.",
            requisito: "Afinidade de Pestilência"
        }
    },

    "Revitalização Penosa": {
        elemento: "Pestilência",
        circulo: 1,
        patrono: "Lain, A Decrépita",
        execucao: "Padrão",
        alcance: "Curto",
        alvo: "Até 3 metros",
        duracao: "Instantâneo",
        resistencia: "Fortificação Reduz a metade do Dano, caso um alvo resista o dado de cura se torna apenas 1d4, 3d4 (Discente) e 5d4 (Verdadeiro).",
        descricao: "A Miséria é insaciável. Através do desejo de consumir, o usuário convoca as entidades da Miséria para devorar a vitalidade de seres próximos. Este ritual causa 1D6+1 de dano de Pestilência para até 3 alvos em alcance muito curto, concedendo 1d8 PV Temporários por alvo com o custo de 1 PE para cada alvo consumido. Você recebe a Condição de Status Positiva, Saciado, que concede +3 em todos os seus testes por 3 turnos e você não pode utilizar este ritual até perder todo o PV temporário ou não estar mais saciado. O PV Temporário some depois da cena ou por ser zerado.",

        discente: {
            custo: 3,
            efeito: "O seu dano aumenta para 3d6+3 e todo o PV temporário se torna 2d8",
            requisito: "2º Círculo"
        },

        verdadeiro: {
            custo: 6,
            efeito: "O seu dano aumenta para 5d6+5 e toda a cura realizada é igual ao dano. O Efeito da área se torna uma esfera de 6 Metros ou um Triângulo.",
            requisito: "Afinidade de Pestilência e Terceiro Círculo"
        }
    },

    "Monstruosidade Incompleta": {
        elemento: "Pestilência",
        circulo: 1,
        patrono: "Agares, o Deformante",
        execucao: "Movimento",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "Cena",
        descricao: "O Usuário desenvolve garras e/ou presas e força uma readaptação do corpo para o desenvolvimento das presas ou garras. As garras causam 2d4 de dano de Pestilência e duram uma cena.",

        discente: {
            custo: 4,
            efeito: "Aumenta o dano para 3d4+2 de Pestilência e consiga +1 dado nos testes de ataque com esta arma.",
            requisito: "25% de EPEEM"
        },

        verdadeiro: {
            custo: 6,
            efeito: "Ao possuir a Arma de Ferrugem, e conjurar este Ritual, você recebe +4d4+3 de dano de Pestilência e caso acerte um dano crítico em um ser, conceda a ele a Condição de Status Faminto II por 2 turnos e consiga a Condição de Status Saciado por 2 turnos.",
            requisito: "Arma de Ferrugem"
        }
    },

    "Reestruturação Corpórea": {
        elemento: "Pestilência",
        circulo: 1,
        patrono: "Nutto Fungi, a Aberração dos Fungos",
        execucao: "Padrão",
        alcance: "Toque",
        alvo: "1 ser",
        duracao: "Instantâneo",
        descricao: "Cura um ser ao tocar sob sua ferida. Recebe a Condição de Status negativa, Faminto I por 3 turnos. Recupere 3d8+3. Cada uso deixa a pessoa bastante magra e com uma aparência mais cansada, cuidado com os diversos usos deste ritual.",

        discente: {
            custo: 3,
            efeito: "Cura 5d8+5 de PV e não concede mais a Condição de Status Faminto I",
            requisito: "2º Círculo e/ou 25% de EPEEM"
        },

        verdadeiro: {
            custo: 9,
            efeito: "Cura 7d8+7 de PV e concede a Condição de Status Saciado por 5 turnos. Muda o alcance para Curto, e alvo para Seres Escolhidos.",
            requisito: "Quarto Círculo e Afinidade com Pestilência"
        }
    },

    "Decadência Corpórea": {
        elemento: "Pestilência",
        circulo: 1,
        patrono: "Tengan, o Oportunista",
        execucao: "Padrão",
        alcance: "Toque",
        alvo: "1 ser",
        duracao: "Instantâneo",
        resistencia: "Fortificação reduz à metade o dano e ignora a Condição de Status.",
        descricao: "Causa uma doença em algum alvo e acelera para estágios dolorosos para causar Dano Paranormal de Pestilência/Fome. 2d8+2, é necessário tocar no alvo.",

        discente: {
            custo: 3,
            efeito: "Você transfere a Doença e contamina sua arma, causando assim o dano da sua arma junto com o dano do Ritual que se torna 3d8+3. Concede a Condição de Status Faminto I por 3 turnos. Remove a Resistência do Ritual."
        },

        verdadeiro: {
            custo: 6,
            efeito: "Você pode causar uma Explosão Esférica de 6 metros em Alcance Curto que causa 8d8+8 de dano e que concede a Condição de Status Faminto II por 6 turnos para todos aqueles que foram acertados.",
            requisito: "Afinidade de Pestilência e Terceiro Círculo"
        }
    },

    "Pragas Quartenárias": {
        elemento: "Pestilência",
        circulo: 1,
        patrono: "Entomonimus, Os Profanos Insetóides",
        execucao: "Padrão",
        alcance: "Muito Curto",
        alvo: "1 ser",
        duracao: "3 Turnos",
        resistencia: "Fortificação cancela o efeito do Parasita.",
        descricao: "Convoque um enxame de insetos que sairá de alguma parte do seu corpo ou da sua boca para envolver uma criatura, causando 2d4+1 de dano extra de Pestilência. Ao falhar no teste de Fortificação, ela ficará afetada por este parasita paranormal que causará 1d4 de dano, Caso a criatura sofra da condição de Status negativa, o dano é somado a +2 e adicione 1d4.",

        discente: {
            custo: 4,
            efeito: "O dano se torna 4d4+3 de Pestilência, e tendo uma condição de status negativa, o dano é somado em +5. Aumenta a duração em 1 turno",
            requisito: "Pestilência I e 30% de EPEEM"
        },

        verdadeiro: {
            custo: 7,
            efeito: "O dano se torna 6d4+5 e se possuir uma condição de status negativa o dano fixo se torna +4 e adiciona 2d4. Aumenta a duração em +2 turnos.",
            requisito: "Afinidade de Pestilência e Acesso ao Terceiro Círculo"
        }
    },

    "O Melhor Tempero": {
        elemento: "Pestilência",
        circulo: 1,
        patrono: "Hungrig, o Cozinheiro Perverso",
        execucao: "Padrão",
        alcance: "Pessoal",
        alvo: "Você",
        duracao: "Cena",
        descricao: "Comidas e bebidas apodrecidas, estragadas ou contaminadas atuam como refeição completa e não causam nenhum efeito negativo ao consumo. E ao comer alguma comida ou bebida apodrecida recupere 1d4+CON de PV.",

        discente: {
            custo: 2,
            efeito: "Você recupera 2d6+CON de PV. Ao se alimentar de algo podre, você consegue a condição de Status Saciado por 2 turnos.",
            requisito: "10% de EPEEM"
        },

        verdadeiro: {
            custo: 4,
            efeito: "Você recupera 2d8+CON, conjurar este Ritual durante uma Cena de Interlúdio permite você usar a ação de se Alimentar Gratuitamente, escolha um aliado para poder Alimentar-se gratuitamente.",
            requisito: "Segundo Círculo e/ou 25% de EPEEM"
        }
    }
};

export default rituais;