const classes = {
    Combatente: {
        trilhas: {
            "Berserker": {
                descricao: "Um combatente focado em potência física, confiando em sua fúria para abater seus inimigos.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Fúria",
                        descricao: "Você é tomado por uma Fúria vinda de uma fonte não-natural que consome o seu ser. Usando uma ação bônus e 1 PE você pode invocar uma fúria devastadora sobre si para aprimorar seu físico selvagemente, nesse estado você recebe +1 dado em testes de ataque e rolagens de dano apenas para corpo a corpo e redução de dano físico 2, você permanece nesse estado até o fim da cena ou até cair inconsciente. Durante a fúria você não pode fazer nenhuma ação que demande calma ou pensamento lógico."
                    },

                    {
                        epeem: 25,
                        nome: "Força Opressora",
                        descricao: "Ao realizar uma manobra de combate ou um inimigo adjacente for alvo de uma manobra, você pode gastar 3 PE e uma Ação de Movimento para fazer um ataque contra o mesmo alvo."
                    },

                    {
                        epeem: 40,
                        nome: "Frenesi",
                        descricao: "Pode-se escolher ao invés de entrar em fúria entrar em frenesi, gastando 3 PE e uma ação de movimento você entra em um estado de ódio extremo e não pensará nenhuma vez antes de atacar, você recebe além dos bônus da fúria, +5 em testes de ataque corpo a corpo, +1 dado de dano em ataques corpo a corpo (resultando em +2d) e sua redução de dano se torna 5. Quando está em frenesi você sempre deve atacar alguém no seu turno ou gastar todas as suas ações para tentar alcançar alguém, independente de quem seja, o Frenesi dura 5 rodadas ou até você cair inconsciente, após o frenesi o personagem fica exausto. Além disso, ao estar em estado de Fúria, você é capaz de utilizar sua Habilidade Inata, Contrato, Santidade e Fé ou Poder Psíquico."
                    },

                    {
                        epeem: 65,
                        nome: "Massacre",
                        descricao: "Sempre que fizer uma manobra de combate você receberá +5 no teste, além disso, quando estiver em frenesi pode fazer dois ataques corpo a corpo em apenas uma ação padrão."
                    },

                    {
                        epeem: 99,
                        nome: "Aniquilador",
                        descricao: "O bônus por ataque especial é dobrado, além disso, o bônus por fúria se torna +2d em testes e dano corpo a corpo e redução de dano físico 5, e o bônus de frenesi se torna +2d e +10 em testes de ataque corpo a corpo, +4d em rolagens de dano e redução de dano físico 10. OBS: A fúria pode ser interrompida prematuramente por um teste alheio de diplomacia dt 20 ou teste de vontade dt 25, a fúria também pode ser interrompida ao ativar o frenesi, após a duração do frenesi não se pode ativar nem a fúria nem o frenesi pelo resto da cena."
                    }
                ]
            },
            "Vigia": {
                descricao: "Ao invés de enfrentar sem estratégia alguma, um vigia prefere entender o ponto fraco de seu oponente e usá-lo ao seu favor, assim como um pequeno jogo de caça.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Marca Predatória",
                        descricao: "Você se torna treinado em Sobrevivência ou se já for recebe +2 na perícia e pode usá-la no lugar de Investigação e Documentos. Adicionalmente, você pode gastar uma ação de movimento e 1 PE para analisar um inimigo em alcance Médio, você receberá +2 em testes de ataque e +1d4 de dano contra esse ser. Em EPEEM 25%, 40%, 65% e 99% esse bônus se altera para, +5 e +1d6, +7 e +1d8, +10 e +1d10, +15 e +1d12 respectivamente."
                    },

                    {
                        epeem: 25,
                        nome: "Rastreador",
                        descricao: "Você pode usar sobrevivência no lugar de furtividade para se esconder, além disso não sofre penalidades por terreno difícil e pode percorrer seu deslocamento normal quando estiver se movendo furtivamente. Além disso, uma vez por turno você pode gastar 1 PE para receber uma ação de movimento extra. Você recebe Faro e Visão no Escuro."
                    },

                    {
                        epeem: 40,
                        nome: "Rastro da Fera",
                        descricao: "Se você possuir alguma pista sobre uma criatura ou ser (foto, documento, cabelo, pedaço de pele etc) pode usar uma ação de interlúdio e fazer um teste de Sobrevivência para entender mais sobre ela, a dificuldade varia de acordo com a pista que você possua se for muito simples será mais difícil mas se dizer muito sobre a criatura será mais fácil, se for bem sucedido, até o fim da missão você terá +2d em qualquer teste envolvendo essa criatura."
                    },

                    {
                        epeem: 65,
                        nome: "Sobrevivente Nato",
                        descricao: "Seu grau de treinamento para sobrevivência aumenta em um (de treinado para veterando, de veterano para expert) se já for expert, receba +5 de bônus na perícia. Além disso, a Marca do Caçador pode ser usada como ação livre e sempre que atacar um ser marcado pela habilidade, você pode gastar 2 PE para adicionar +2d de dano adicionais em um ataque."
                    },

                    {
                        epeem: 99,
                        nome: "Predador",
                        descricao: "Sempre que fizer uma rolagem de dano contra um oponente desprevenido, flanqueado ou que tenha sido investigado pela habilidade Rastro da Fera, você pode gastar 2 PE para causar dano máximo imediatamente."
                    }
                ]

            },
            "Fortificado": {
                descricao: "Um fortificado é todo aquele que põe a vida dos outros acima da sua vida, foca em resistir aos ferimentos externos para que ninguém mais sofra.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Casca Grossa",
                        descricao: "Você recebe +2 PV por 5% de EPEEM que possuir, além disso pode usar RES como atributo base para rolagens de ataque e recebe treinamento em Fortificação, ou se já for treinado, recebe +2 na perícia."
                    },

                    {
                        epeem: 25,
                        nome: "Vem pra cima",
                        descricao: "Se um aliado em alcance curto for atacado, uma vez por rodada você pode gastar 2 PE e uma reação para provocar o atacante, fazendo um teste de fortificação resistido pela vontade do alvo, se falhar, ele deve gastar seu turno para te atacar ou tentar chegar até você. Além disso, sua defesa aumenta em +2."
                    },

                    {
                        epeem: 40,
                        nome: "Defesa Tatu",
                        descricao: "Sempre que receber dano físico, pode gastar uma reação e 2 PE para reduzir o dano pela metade, a partir de 75% de EPEEM você pode fazer o mesmo para dano paranormal. Além disso, você pode gastar 2 PE para ignorar quaisquer penalidades por dano massivo."
                    },

                    {
                        epeem: 99,
                        nome: "Fortaleza",
                        descricao: "Ao entrar no estado de Morrendo você tem +1 turno para resistir à morte, e consegue fazer ações normalmente por não estar indefeso ou inconsciente, se seu personagem morrer, os seus aliados vão sofrer metade de danos físicos por 1d8+1 de turnos."
                    },
                ]
            },
            "Solo": {
                descricao: "Você trilha o caminho da pólvora e planejamento tático, tendo pensamentos rápidos para agir sob pressão. Condição Especial: Para ser dessa trilha é necessário treino em Pontaria.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Armado e Preparado",
                        descricao: "Você recebe +5 de iniciativa e percepção, pode recarregar armas de fogo como ação livre e pode escolher uma arma simples ou marcial para ter seu custo reduzido em 1."
                    },
                    
                    {
                        epeem: 25,
                        nome: "Técnica Letal",
                        descricao: `Você aprende a aproveitar oportunidades em combate, ao realizar um ataque, pode gastar 3 PE (+1 PE para cada efeito adicional) e receber um efeito a sua escolha:
                        - Perfurante: Seu ataque ignora até 5 pontos de redução de dano do alvo.
                        - Perigoso: A margem de ameaça do ataque aumenta em 2.
                        - Potente: O multiplicador de crítico aumenta em 1x.
                        - Amplo: O ataque também atinge inimigos adjacentes ao alvo ou aumenta o alcance em um passo (de curto para médio, de médio para longo…)
                        - Ritualístico: Após o ataque pode realizar um ritual como ação livre, você ainda precisa pagar os custos do ritual.
                        - Sangria: Você ataca com sua arma simples ou marcial e recebe +1d4 de dano extra.`
                    },

                    {
                        epeem: 40,
                        nome: "Pensamento ágil",
                        descricao: "Uma vez por rodada, ao acertar um ataque, pode se deslocar metade de seu deslocamento como uma ação livre. Além disso, sempre que escolher esquivar de um ataque ou fazer um teste de reflexo pode gastar 1 PE para ganhar +5 no teste ou na defesa ou gastar 3 de PE para realizar um ataque com sua arma simples ou marcial corpo a corpo."
                    },

                    {
                        epeem: 65,
                        nome: "Na ponta da faca ou no cano da arma?",
                        descricao: `Sua habilidade Técnica letal passa a ter os seguintes efeitos:
                        - Perfurante: Seu ataque ignora até 10 pontos de redução de dano do alvo.
                        - Perigoso: A margem de ameaça do ataque aumenta em 5.
                        - Potente: O multiplicador de crítico aumenta em 2x.
                        - Amplo: O ataque também acerta inimigos em um raio de 3m do alvo original ou pode aumentar o alcance em dois passos (por exemplo de curto para longo)
                        - Ritualístico: Após realizar o ataque pode realizar um ritual como ação livre e o custo do ritual é diminuído em -1 PE.
                        - Sangria: Você ataca com sua arma simples ou marcial e recebe +2d8 de dano extra.`
                    },

                    {
                        epeem: 99,
                        nome: "Overdose",
                        descricao: "Ao acertar um ataque usando sua técnica letal você recupera 2d4 de vida, aumenta seu deslocamento em +3m, recebe +5 em reflexos e iniciativa e não pode ser pego desprevenido."
                    }
                ]
            },
            "Aberrante": {
                descricao: `“Agora somos um” foi o que seu profano lhe disse ao concluir seu acordo com ele em busca de mais poder. Ou você nunca quis esse poder, sendo uma vítima de um poder imenso com uma consequência maior ainda.
                
                Condição Especial: Para ser dessa trilha é necessário treino em Resistir.
                `,

                poderes: [
                    {
                        epeem: 10,
                        nome: "Aberração Parcial",
                        descricao: "Você pode gastar 2 PE e fazer um teste de Vontade DT 15 (em caso de falha recebe 2d4 de dano mental) para ativar uma transformação inicial com seu profano, até o fim da cena, você recebe +1d6 de dano do elemento do seu profano em ataques corpo a corpo, o dado de dano aumenta em um passo para cada poder espiritual do elemento que você tiver (de 1d6 para 1d8, 1d8 para 1d10…). Além disso, se torna treinado em ritualismo ou se já for, recebe +2 na perícia."
                    },

                    {
                        epeem: 25,
                        nome: "Sede de sangue",
                        descricao: `Gastando 2 PE e uma ação de movimento, você pode “marcar” um alvo, até o fim da cena você ignora até 5 pontos de redução de dano do alvo, tem +1d20 em testes de ataque contra ele e uma vez por cena ao ativar a marca você pode fazê-lo ficar em uma condição entre: Enjoado, Sangrando, Vulnerável, Abalado e Lento (Vontade DT Agi ou For encerra a condição, a cada turno ele pode fazer um novo teste). Além disso, recebe um Poder Espiritual do elemento do seu profano.`
                    },

                    {
                        epeem: 40,
                        nome: "Despertar Monstruoso",
                        descricao: "Você aprende o Ritual Immanis Excitatio que será do Elemento Escolhido pelo Jogador aos 10% de EPEEM e revelará a criatura da sua Marca (Ver Página XX). Você se conecta a um elemento da sua escolha aos 40% de EPEEM ao invés dos 50%, ao alcançar 50%, você recebe um poder do elemento escolhido."
                    },

                    {
                        epeem: 65,
                        nome: "Marcado",
                        descricao: "Pelo seu contrato único com o Profano que te deu essas capacidades paranormais, você pode uma vez por Sessão ativar sua Assimilação Verdadeira, que duplica o efeito dos seus Rituais customizados com o profano e a DT para resistir ao seus rituais e ataques ritualísticos aumenta em +5. Toda vez que atacar o elemento que você oprime, recebe 1d4+2 de Vida, ao ser atacado pelo elemento que te oprime, perde 1d4 de sanidade. Além disso, recebe uma Técnica Espiritual de Anatomia."
                    },

                    {
                        epeem: 99,
                        nome: "Vontade Interior",
                        descricao: "Enquanto estiver sob efeito de Immanis Excitatio, não será mais necessário realizar um teste de Fortificação ou Resistir para não atacar algum aliado, e você poderá conjurar esse ritual pela metade do custo de PE  e conjurar como ação livre o Ritual Immanis Excitatio. Além disso, caso receba ataques do elemento que você conectou, eles recuperam PV ao invés de causar dano."
                    }
                ]
            },
            "Samurai Urbano": {
                descricao: "Seguindo ensinamentos antigos sobre uso de espadas e armas brancas, um Samurai Urbano detém uma enorme honra e seu estilo é extremamente ágil e letal.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Caminho da espada",
                        descricao: `Todas as armas de dano cortante tem seu multiplicador de crítico aumentado em 1x. Além disso, você pode escolher um dos caminhos abaixo e receber seus bônus:
                        - Caminho do Sol: Você se torna treinado em Fortificação, ou se já for, receba +2 na perícia.
                        - Caminho da Lua: Você se torna treinado em Reflexos, ou se já for, receba +2 na perícia.
                        - Caminho do Crepúsculo: Você se torna treinado em Pontaria, ou se já for, receba +2 na perícia.`
                    },

                    {
                        epeem: 25,
                        nome: "Tormenta da lâmina",
                        descricao: `Você soma sua Agilidade em testes de ataque com armas de dano cortante, além disso, recebe bônus baseado no caminho escolhido em Caminho da espada:
                        - Caminho do Sol: Ao bloquear um ataque, você pode gastar 1 PE e fazer um ataque contra o inimigo que lhe atacou. Além disso, você recebe redução de dano igual a sua Agilidade.
                        - Caminho da Lua: Você pode gastar 1 PE para receber uma ação de movimento adicional uma vez por turno. Além disso, você soma sua Agilidade em rolagens de dano (se já utiliza, some outra vez).
                        - Caminho do Crepúsculo: Você pode gastar 1 PE para disparar uma flecha extra caso erre um alvo. Além disso, você recebe +2 em testes de ataques a distância.`
                    },

                    {
                        epeem: 40,
                        nome: "Mente limpa",
                        descricao: `Você pode gastar 2 PE e encerrar uma condição negativa que esteja te afetando e se torna treinado em Fortificação, se já for, recebe +2 na perícia. Além disso, recebe um bônus do caminho escolhido em Caminho da espada:
                        - Caminho do Sol: Uma vez por rodada, você pode recuperar o fôlego gastando 2 PE você recupera 3d6+AGI em pontos de vida como ação livre.
                        - Caminho da Lua: Ao manter estável através da sua respiração, você pode fazer um ataque voraz gastando 2 PE para fazer um ataque como ação de movimento.
                        - Caminho do Crepúsculo: Respirando profundamente você é capaz de se manter concentrado no seu alvo, você pode atirar mais uma flecha gastando 2 de PE para fazer o tiro como ação de Movimento.`
                    },

                    {
                        epeem: 65,
                        nome: "Kiai supremo",
                        descricao: `Você soma sua Agilidade em rolagens de dano do tipo cortante ou Perfurante (se já soma, some mais uma vez). Sempre que tiver um acerto crítico, pode gastar 3 PE para causar dano máximo automaticamente, por fim, recebe um bônus baseado em seu caminho:
                        - Caminho do Sol: Na primeira rodada de um combate, você recebe 20 PV temporários que duram até o fim da cena. Além disso aumente sua defesa em +2.
                        - Caminho da Lua: Na primeira rodada de um combate, você recebe uma ação de movimento extra. Além disso, aumente seu deslocamento em +3m.
                        - Caminho do Crepúsculo: Na primeira rodada de um combate, você pode disparar uma flecha poderosa ao respirar profundamente e se concentrar como ação livre, ela causa +2d8 de dano Perfurante. Além disso, receba Visão no Escuro.`
                    },
                    
                    {
                        epeem: 99,
                        nome: "Invencível sob o sol",
                        descricao: "Você soma sua Agilidade mais uma vez em rolagens de dano do tipo cortante ou perfurante, aumenta a margem de crítico em +2 e recebe redução de dano físico, paranormal e mental igual a 5."
                    }
                ]
            },
            "Feiticeiro": {
                descricao: `Eles continuam correndo, você se torna mais e mais impaciente, mas não adianta correr, uma hora vão sentir uma lâmina nas costas ou aquele ritual poderoso que não vão poder nem ver de onde veio. Feiticeiros são sérios e sádicos de certa forma nas suas eliminações, brincando de Caçador e Presa, Caçador e Feiticeiro são trilhas que geralmente se dão muito bem por práticas e gostos similares nas eliminações de alvos.

                Condição Especial: Para ser dessa trilha é necessário treino em Ritualismo e Sobrevivência.`,

                poderes: [
                    {
                        epeem: 10,
                        nome: "Caçador de Recompensas",
                        descricao: "Ao receber essa habilidade, você deve selecionar duas armas em seu inventário, uma para matar alvos humanos e outra para matar alvos espirituais. Sempre que usar a arma para o alvo correto, você recebe um bônus de dano e teste de ataque com aquela arma igual a um atributo aleatório do alvo (1= FOR, 2= AGI, 3= RES, 4= CON, 5= INF, 6 Role novamente) até o fim da cena, esse bônus se acumula caso atinja outros alvos, porém acaba se você cair inconsciente. Além disso, escolha um dos rituais a seguir: Eletrocutar, Queimar, Pragas Quarentenárias ou Projétil de Sangue, você poderá conjurar a forma base dela. Ao atingir 35% de EPEEM escolha outro ritual dessa lista para conjurar, o outro ritual escolhido pode ser conjurado agora na versão Discente, por fim aos 75% de EPEEM escolha um terceiro ritual, seu primeiro ritual pode ser conjurado na versão Verdadeira e o segundo e terceiro ritual escolhido pode ser conjurado na versão Discente."
                    },

                    {
                        epeem: 25,
                        nome: "Novinho em folha",
                        descricao: "A arma de matar alvos humanos e a arma de matar alvos espirituais, recebe uma melhoria (lista de equipamentos) sem aumentar a categoria delas. Além disso, uma vez por cena você é capaz de fabricar cinco armas arremessáveis realizando um teste de sobrevivência, gastando 2 de PE e uma ação de movimento, o elemento do dano físico varia dependendo de qual matéria-prima você utilizou para fabricar, as armas quebram ao fim da cena."
                    },

                    {
                        epeem: 40,
                        nome: "Ápice da Evolução",
                        descricao: `Sua arma para eliminar alvos da Realidade recebe a Modificação de arma “Anormal” e sua arma para eliminar alvos Paranormais recebe a Modificação de arma “Paranormal” sem aumentar a categoria das duas. Além disso, recebe +1 ponto de atributo, +5 de Sobrevivência, recebe visão no escuro e recebe a proficiência de utilidade “Rato de Rua” caso já possua, recebe outra proficiência de utilidade ou de combate.`
                    }, 

                    {
                        epeem: 65,
                        nome: "Marcado para Morrer",
                        descricao: "Você pode gastar uma ação completa para analisar um alvo que consiga ver, desde que esteja escondido, até o fim da cena você recebe +1d20 em testes de ataque contra o alvo, +1d do mesmo tipo em rolagens de dano contra o alvo e soma seu CON ou RES na defesa contra ataques que o alvo faça. Além disso, pode usar Sobrevivência no lugar de Furtividade para se esconder e recebe Faro."
                    },

                    {
                        epeem: 99,
                        nome: "Executor",
                        descricao: "Ao atacar um ser humano ou animal que você estiver perseguindo, se acertar o primeiro ataque enquanto a presa estiver desprevenida, você causa dano máximo da sua arma sem precisar rolar dados, se acertar um profano, você reduz até o fim da cena 1 atributo dele de sua escolha, porém o dano causado é o dano normal que precisa ser rolado. Além disso, recebe Percepção às Cegas."
                    }
                ]

            },
            "Punho Divergente": {
                descricao: "Você utiliza a Energia Espiritual de outra forma, encantando seus punhos com ela para fazer um grande massacre.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Punhos de Aço (Round One)",
                        descricao: "Você recebe a habilidade de classe de Combatente Combate CQC, caso pegue essa mesma habilidade posteriormente, você recebe +1 dado de dano do mesmo tipo de elemento dos seus ataques desarmados."
                    },

                    {
                        epeem: 25,
                        nome: "Combo Estiloso (Round Two)",
                        descricao: "Ao realizar um ataque desarmado e acertar o seu alvo, você pode gastar 2 de PE para realizar um segundo ataque, +2 PE para um terceiro e por aí vai, você pode realizar um número de ataques igual seu atributo de ataque, cada ataque consecutivo adicione +1d4 no dano."
                    },

                    {
                        epeem: 40,
                        nome: "Treino Definitivo (Round Three)",
                        descricao: "Você adiciona sua RES a sua defesa e recebe o mesmo número como RD Cortante, Perfurante e Contudente. O crítico dos seus ataques desarmados se tornam 18 e o multiplicador de dano no crítico se torna 2x."
                    },  

                    {
                        epeem: 65,
                        nome: "Yuji Style (Round Four)",
                        descricao: "Você é capaz de adicionar sua Energia Espiritual em seus ataques, numa velocidade e precisão absurda, causando assim um efeito de Sonic Boom. Você consegue a Técnica Espiritual de Combate, 精製 Seisei (Alinhamento Santo soltando um raio dourado) ou 罰 Batsu (Alinhamento Profano soltando uma espiral de energia vermelha). Ao realizar um ataque crítico, role 1d8, caso caia 7 (bônus da trilha) ou 8, adicione x2 no multiplicador de dano do seu ataque causado."
                    },

                    {
                        epeem: 99,
                        nome: "Fulgor Paranormal (K.O)",
                        descricao: "Uma vez a cada 3 turnos, você pode gastar 7 de PE após realizar um ataque desarmado para contar como acerto crítico garantido, este ataque pode contar como o seu próximo ataque consecutivo. Aumente +2 na ameaça da margem de crítico e diminua em 1 o valor para Técnica Espiritual de Combate Seisei ou Batsu se tornando 6, 7 ou 8 para conseguir utilizar. Caso erre um ataque, adicione +1d20 no próximo teste realizado e adicione o seu atributo nestas rolagens, ao acertar um ataque, esse bônus é reiniciado."
                    }
                ]
            },
            "Caçador Desamparado": {
                descricao: "Você se sente desamparado pelo caos que o mundo se tornou, mas você não vai esperar sentado enquanto tudo voa pelos ares, Eles Sangram, você não os dará descanso.",

                poderes: [
                    {
                        epeem: 5,
                        nome: "Inumanidade",
                        descricao: "Ver Página Devorador do Ascético você possui as mesmas capacidades que um Vampiro Devorador, mesma regra de fraquezas que se aplica a você. Você consegue utilizar uma arma de fogo curta na sua mão secundária para causar dano ao Aparar ataques de inimigos gastando 2 de PE."
                    },

                    {
                        epeem: 10,
                        nome: "Abraço da Fera",
                        descricao: "Para caçar monstros é necessário se tornar um, o abraço da Fera te concede a bênção do prazer da caça. Você pode gastar uma ação de movimento e 1 PE para marcar um inimigo como sua Presa. Até o fim da cena, você recebe +1d4 em rolagens de dano contra essa criatura. Se o inimigo for do tipo Besta ou Paranormal do elemento oposto ao seu, o bônus aumenta para +1d6 caso você esteja com alguma arma de fogo na sua mão secundária, receba +2 no teste de Aparar. Você recebe vida igual ao devorador para cada ataque ou aparada bem sucedida."
                    },  

                    {
                        epeem: 15,
                        nome: "Arma de Caçador",
                        descricao: "Você é capaz de transformar qualquer arma numa forma curta e forma longa, com suas habilidades únicas entre alterações, esse bônus não se limita apenas a armas exóticas, qualquer arma que não seja a distância é considerada exótica para você, você recebe +1 dado de dano em ataques com armas exóticas."
                    },

                    {
                        epeem: 25,
                        nome: "Postura do Caçador",
                        descricao: "Quando um inimigo que atacar você acaba errando o ataque, e estiver ao alcance de disparo, você pode gastar 2 de PE para realizar um ataque com sua arma de fogo que causará metade do dano, e causará -1d20 no teste do inimigo e causará um ônus de -5. Receba um poder de 5% de Devorador."
                    },

                    {
                        epeem: 65,
                        nome: "Dança Mortal",
                        descricao: "Você pode gastar 2 de PE para realizar um ataque contra um ser adjacente ao alvo que você atacou posteriormente, essa habilidade pode ser usada igual ao seu maior atributo, caso esteja na forma híbrida ou total de uma transformação."
                    },

                    {
                        epeem: 99,
                        nome: "Lua Rubra Ascendente",
                        descricao: "Sempre que reduzir um inimigo a 0 PV, você recupera 2 PE e pode realizar uma ação bônus imediata (como movimento, ataque ou ritual).  Além disso, enquanto tiver menos de 50% de PV, recebe +4 em testes de ataque, aparar e rituais — mas sofre +5 de dano recebido. Suas armas ficam com os bônus das duas formas ativadas ao mesmo tempo."
                    }
                ]
            }
        },
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
        limitePericias: 2,
        proficiencias: [
            "Armas Simples", "Armas Pesadas", "Proteções Leves", "Proteções Pesadas"
        ]
    },

    Especialista: {
        trilhas: {
            "Técnico de Combate": {
                descricao: "Um tipo de Agente Estrategista que é um Oponente Formidável em equipe, o Poder do Técnico de Combate é resumido em ‘’a união faz a força’’ sua capacidade de pensamento, criação de estratégias é capaz de inspirar Agentes companheiros e criar uma equipe imbatível.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Inspiração Harmoniosa",
                        descricao: "Suas palavras inspiram um aliado, ao gastar 2 de PE e uma reação, você pode fazer um aliado em curto alcance rolar novamente um teste recém feito."
                    },

                    {
                        epeem: 25,
                        nome: "Combate Inteligente",
                        descricao: "Uma vez por rodada como uma ação livre, você pode gastar 2 PE para um aliado em alcance curto receber +5 em um teste de manobra. Em 50% de EPEEM você pode usar essa habilidade para testes de ataque."
                    },

                    {
                        epeem: 40,
                        nome: "Estratégia Inesperada",
                        descricao: "Você pode direcionar aliados em alcance curto. Gaste uma ação de movimento e 2 de PE para cada aliado direcionado (limitado por sua influência), e no turno dos aliados afetados pela Estratégia Inesperada, eles ganharão uma ação de movimento adicional."
                    },

                    {
                        epeem: 65,
                        nome: "All-Out-Attack",
                        descricao: "Quando um aliado próximo realizar um ataque a algum inimigo, uma vez por rodada como uma ação livre, você pode gastar 3 de PE  para você ou algum aliado próximo realizar um ataque extra (alcance curto) no mesmo inimigo. Além disso, o alcance de Inspiração Harmoniosa, Combate Inteligente e Estratégia Inesperada se torna média."
                    },

                    {
                        epeem: 99,
                        nome: "Líder de Elite",
                        descricao: "Você pode gastar 5 de PE  para todos os aliados em alcance médio, receba uma ação padrão no próximo turno dele."
                    }
                ]
            },
            "Artífice Prodígio": {
                descricao: "Um tipo de Agente com gostos… peculiares e exóticos, o Artífice Prodígio é especialista em improvisar e criar armadilhas e principalmente bombas caseiras ou utilizar granadas, explosivos e químicos com maestria, Agentes Artífices são meio estranhos por amarem explosões até demais… Por isso se dão bem demais com os Profetas Caóticos.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Granadas Boladas",
                        descricao: "Você recebe uma bolsa de granadas que se torna seu ataque principal, essas granadas causam 2d8+CON de dano e acertam até 2 alvos adjacentes num círculo de 3 metros. Você pode gastar 1 de PE para evitar que aliados sejam acertados controlando a área da explosão básica com sua Energia Espiritual. Receba uma vestimenta gratuita de Ofício (Explosivos.)"
                    },

                    {
                        epeem: 15,
                        nome: "Novas Invenções",
                        descricao: "Você consegue trocar o dano físico das suas granadas com uma ação completa, caso você possua afinidade com um elemento ou componente ritualístico, você pode trocar o dano da granada por dano elemental."
                    },

                    {
                        epeem: 25,
                        nome: "Fabricação (i)legal",
                        descricao: `Usando Ofício (Explosivos) você é capaz de dar funcionalidades novas às suas granadas boladas ou explosivos em seu inventário com um teste DT 25 e gastando PE específico. 
                        4 de PE - Minas/Armadilhas: Você começa a usar invenções tecnológicas ou manuais para criar uma mina que explode como uma antipessoal. 
                        2 de PE - Granada de Fumaça: Você rola 1d4 para quantos turnos a grana de fumaça irá durar, o alcance dela aumenta com o seu atributo de CON ou INF.
                        3 de PE - Granada Debilitante: Você fabrica uma granada utilizando bolas de gude e coisas que podem derrubar um inimigo se ele falhar num teste de Reflexo, você pode alterar o atributo dessa perícia dele para INF ou CON para tentar prejudicar ou deixar o normal. Caso ele pise na granada ou ela seja ativada e falharem no teste, ficam caídos e vulneráveis. A granada ativa em cone de até 4 metros, quanto mais perto for ativada ou se for pisada, maior a DT para resistir contra seu teste.
                        5 de PE - Granada de Névoa: Você fabrica uma granada de Névoa com materiais debilitantes ou componentes ritualísticos para causar 2d6/2d8/2d10 de dano do elemento correspondente por turno em todos os alvos num alcance igual ao seu CON ou INF. Inimigos na névoa recebem ônus no deslocamento igual ao seu CON ou INF.
                        1 de PE - Granada Adesiva: Você fabrica uma granada capaz de se adesivar em alguma superfície ou alvo, detonando com sua Energia Espiritual ou depois de algum tempo, ela perde o dano em área e recebe -1 dado de dano, porém é capaz de deixar rastros por 2 turnos para evitar que fique furtivo e facilitar o rastreio.`
                    },

                    {
                        epeem: 40,
                        nome: "Não fique aí parado!",
                        descricao: "Gastando 3 PE e uma reação de PE você consegue avisar previamente a dois aliados próximos ao inimigo no raio da explosão de uma granada para se afastarem, como ação livre, ambos saem do alcance. Além disso, através da manipulação de sua Energia Espiritual ou Conhecimentos recebidos, você é capaz de conceder uma Modificação de Explosivo para um pacote de granadas específico."
                    },

                    {
                        epeem: 65,
                        nome: "Prazer Inexplicável",
                        descricao: ""
                    }, 

                    {
                        epeem: 99,
                        nome: "Kaboom!",
                        descricao: "Você se torna apto para jogar 2 granadas em uma ação padrão, mas você fará 2 testes de resistência, todos os seus aliados se tornam imunes ao dano e feitos de suas granadas e armadilhas, e se um ser for atingido por um explosivo seu, ele sofrerá -2d20 e -10 em testes."
                    }
                ]
            },
            "Socorrista de Campo": {
                descricao: "Um tipo de Agente adorado por muitos por sua presença otimista e encantadora, os Socorristas de Campo possuem um papel de imensa importância para socorrer os necessitados e ajudar a salvar o máximo de vidas possíveis, sejam Civis ou Agentes.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Ajudar quem Precisa",
                        descricao: "Você pode usar uma ação padrão e 2 de PE  para realizar um teste de cura, se passar, você cura 2d10 de PV a você mesmo ou alguém em alcance muito curto (próximo a você) em EPEEM 25%, 40%, 65% e 99% você pode gastar +1 PE  para conseguir mais um dado de cura. Além disso, recebe Proficiência de Utilidade, Ciências Forense."
                    },
                    
                    {
                        epeem: 25,
                        nome: "Mãos Ágeis e Agilidade Suprema",
                        descricao: "Você recebe +2 de dano com armas cortantes ou de disparo de uma mão apenas. Ao gastar 3 de PE  você pode avançar em um aliado em alcance curto como ação livre e cura 1d6 de vida a quem estiver em alcance adjacente quando essa habilidade for usada."
                    },

                    {
                        epeem: 40,
                        nome: "Soro Fisiológico",
                        descricao: "Ao gastar 3 de PE e uma ação padrão  você consegue remover uma condição negativa (exceto morrendo) a si mesmo ou a um aliado próximo, curando também 1d6+1 de vida."
                    },

                    {
                        epeem: 65,
                        nome: "Como nos Filmes",
                        descricao: "Se um aliado estiver morrendo no alcance do seu deslocamento, você pode chegar até ele como ação livre, e ao realizar qualquer teste de cura ou remoção de condições, você e seu aliado ganham +5 de defesa até o final do próximo turno. Além disso, reduz o espaço que ocupa ao estar carregando algum personagem pela metade."
                    },

                    {
                        epeem: 99,
                        nome: "Desfibriladores de Alta Tecnologia",
                        descricao: "Você pode gastar uma ação completa e 8 de PE  permanente, você consegue reanimar um personagem que tenha morrido durante ou após um combate. (Exceto Dano Massivo.)"
                    }
                ]
            },
            "Camper de Elite": {
                descricao: "Um tipo de Agente que ataca a distância, possui uma boa visão e sempre possui cartas na manga caso seja encurralado, assim como os Solos, Campers de Elite são sérios e brutais em suas eliminações.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Disparo Calculado",
                        descricao: "Ao atacar que esteja a pelo menos 6 metros de você com sua arma de fogo, recebe +1 dado de dano. Além disso, recebe +5 em testes de intimidação enquanto estiver empunhando sua arma de fogo."
                    },

                    {
                        epeem: 25,
                        nome: "Preparado para o Combate",
                        descricao: "Ao iniciar seu turno sem nenhum inimigo adjacente, pode gastar 1 PE para escolher uma posição. Até o início do próximo turno: Postura Defensiva +3 Defesa e +2 em testes de Defesa; Postura Ofensiva diminui sua margem de crítico em 1 e adiciona +1 de dano fixo; Postura Tática Você recebe +3m de deslocamento e +2 em testes de Atletismo para reposicionamento."
                    },

                    {
                        epeem: 40,
                        nome: "Bala na Agulha",
                        descricao: "Quando acertar um inimigo, pode marcá-lo. Enquanto estiver marcado: você recebe +5 para o acertar com sua arma de fogo; aliados recebem +4 nos ataques contra ele; você sabe aproximadamente a direção dele enquanto estiver no alcance de seus sentidos. A Marcação dura a quantidade de turnos igual à sua INF."
                    },

                    {
                        epeem: 65,
                        nome: "Lento Demais",
                        descricao: `Quando começar o seu turno você pode ignorar uma regra física com sua arma de fogo imbuída com sua energia espiritual. Escolha apenas um por turno:
                        Atravessar cobertura;
                        Tiro rápido que ignora desvantagem de estar corpo a corpo com um inimigo;
                        Atingir dois inimigos alinhados;
                        Aumentar o alcance curto para médio, alcance médio para longo.`
                    },

                    {
                        epeem: 99,
                        nome: "Boom, Headshot",
                        descricao: "Quando você tiver um acerto crítico, você causa dano máximo sem precisar rolar dados. Você não precisa se preocupar com pacotes de munição, você pode levar pacotes de balas longas sem contar o peso delas igual a sua INF."
                    }
                ]
            },
            "Fantasma": {
                descricao: `Um tipo de Agente perito em quebrar fechaduras e se esconder dos olhos de inimigos, Pouco se sabe sobre Agentes dessa natureza por serem quietos mas bons ouvintes, se precisar de algum serviço único, os Fantasmas podem ajudar com prazer.
                
                Condição Especial: Para ser dessa trilha é necessário treino em Crime ou Ofício.`,

                poderes: [
                    {
                        epeem: 10,
                        nome: "Dois Lados da Mesma Moeda",
                        descricao: `Ao gastar 1 de PE num teste de perícia de Ofício ou Crime pode-se utilizar um de dois efeitos. Além disso, ao gastar 1 de PE, você é capaz de dividir uma arma arremessável em cinco, permanecendo com as mesmas estatísticas da original, porém todas as cinco ocupam o mesmo espaço da original. Por exemplo, uma faca no inventário pode se tornar cinco facas do mesmo tipo que todas juntas tem peso 1 assim como a faca original.

                        Como um Gato: Você recebe +5 de em Atletismo e Crime, podendo percorrer seu deslocamento normal ao se esconder sem penalidade.

                        Ao Acaso: Você realiza um teste de Ofício com +5 de vantagem para fabricar alguma armadilha que causa 2d6+CON de dano cortante ou de impacto. aos 25% se torna 2d8 e diminui o deslocamento do inimigo igual ao dobro da sua AGI, 40% 2d10 e deixa o alvo Enjoado e 65% 2d12 causa Sangramento II, Envenenamento II ou Em Chamas II.
                        Além disso, sempre que fizer um ataque contra um oponente desprevenido ou flanqueado recebe +1d6 de dano extra, esse dano aumenta em mais 1d6 em 25% de EPEEM e também em 40%, 50%, 65% e 99%. Kunais, Facas e Shurikens recebem +1 dado de dano.`
                    },

                    {
                        epeem: 25,
                        nome: "Costume",
                        descricao: "Você recebe visão no escuro, além disso, pode conceder a modificação de arma Oculto a qualquer arma que você possui sem aumentar a categoria de tal."
                    },

                    {
                        epeem: 40,
                        nome: "Danny P.",
                        descricao: "Uma vez por cena é possível trocar algum teste de perícia por Crime ou Ofício e receber um bônus de +5 pelo custo de 1 PE. Além disso, não recebe mais desvantagens em terrenos difíceis, e toda vez que bloquear ou desviar de um ataque, cause dano igual a sua AGI ou CON ao ser que está te atacando."
                    },

                    {
                        epeem: 65,
                        nome: "Crime perfeito",
                        descricao: "Ao conseguir passar num teste de Crime ou Ofício, receba +1d20 em testes de perícia e aumente sua defesa igual a seu CON por 1d6 de turnos. Além disso, todos os testes de Crime ou Ofício têm sua DT diminuída igual ao seu CON."
                    },

                    {
                        epeem: 99,
                        nome: "Espectro Sombrio",
                        descricao: "Ao entrar no estado de morrendo com 0 de PV, seu personagem não cai e continua hábil a lutar e só entra no estado de morrendo caso receba outro golpe ou sofra dano de alguma condição, enquanto estiver neste estado ele não pode ser executado, mas para continuar vivo é necessário um teste de Fortificação toda rodada (DT 20+5 por rodada, caso falhe no teste ou receba um dano você cai no estado de morrendo. Além disso, você se torna imune a ficar Flanqueado e Desprevenido."
                    }
                ]
            },
            "Negociante Experiente": {
                descricao: "Um Agente Versátil na Comunicação, Enganação e Sedução, geralmente são quem tentam limpar a barra depois de um estrago imenso em alguns lugares.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Eloquência Instigante",
                        descricao: "Uma vez por rodada, você pode gastar 1 de PE para ganhar +5 em um teste baseado em INF. Uma arma ou item operacional recebe uma modificação gratuita sem aumentar a categoria de tal."
                    },

                    {
                        epeem: 25,
                        nome: "Discurso Motivador",
                        descricao: "Uma vez por cena, você pode gastar 4 PE para fazer um discurso motivacional para seus aliado, você e todos os aliados em alcance curto recebem +1D em todos os testes até o fim da cena. Em 50% de EPEEM o alcance muda para médio e o bônus para +2D."
                    },

                    {
                        epeem: 40,
                        nome: "Nós conseguimos!",
                        descricao: "Ao fim de uma cena de investigação, caso seu grupo consiga investigar todos os pontos de interesse ou faça uma dedução boa sobre o que aconteceu na cena de investigação (a critério do mestre), você recebe 10 PE temporário e os seus aliados recebem 5 PE temporário até o fim da missão. Adicionalmente, você ganha +d6 em um teste à sua escolha até o fim missão, você pode acumular um número máximo desse bônus igual seu valor de Intelecto."
                    },

                    {
                        epeem: 65,
                        nome: "Eu conheço um cara",
                        descricao: "Uma vez por missão, você pode ativar sua rede de contatos para pedir um favor, como por exemplo trocar todo o equipamento do seu grupo (como se tivesse uma segunda fase de preparação de missão), conseguir um local de descanso ou mesmo ser resgatado de uma cena. O mestre tem a palavra final de quando é possível usar essa habilidade e quais favores podem ser obtidos."
                    },

                    {
                        epeem: 99,
                        nome: "Truque de Mestre",
                        descricao: "Acostumado a uma vida de fingimento e manipulação, você pode gastar 5 PE para simular o efeito de qualquer habilidade (Que não seja ritual ou algo espiritual) que você tenha visto um de seus aliados usar durante a cena. Você ignora os pré-requisitos da habilidade, mas ainda precisa pagar todos os seus custos, incluindo ações, PE e materiais, e ela usa os seus parâmetros de jogo, como se você estivesse usando a habilidade em questão."
                    }
                ]
            }
        },
        vidaBase: 16,
        peBase: 3,
        sanidadeBase: 16,
        progressao: {
            vida: 4,
            pe: 3,
            sanidade: 4
        },
        periciasIniciais: [],
        limitePericias: 7,
        proficiencias: [
            "Armas Simples", "Armas Marciais", "Proteções Leves"
        ]
    },

    Profeta: {
        trilhas: {
            "Destemido": {
                descricao: "Um tipo de Agente Monge Moderno que é versátil no combate e no uso de rituais do Paranormal, eles são bastante decididos e acolhedores para quem está à beira da loucura como eles.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Perturbação Incomum",
                        descricao: "Você aprende um ritual de corromper armas, e o custo de todos eles é reduzido em -1 PE e quando for atacar, pode atacar com Ritualismo ao invés de usar Combate. Além disso, a cada 5% de EPEEM, aumente seu PV em 2."
                    },

                    {
                        epeem: 15,
                        nome: "Especialização",
                        descricao: "Você recebe uma Proficiência de Combate de sua escolha. Armas Pesadas, Armas Marciais, Armas Exóticas, Combate Desarmado."
                    },

                    {
                        epeem: 25,
                        nome: "Disciplina",
                        descricao: "Receba +1 dado de dano no Amaldiçoar Arma. Além disso, pode conjurar Corromper Arma como uma ação de movimento, ao ter um ou mais corromper arma ativo, você recebe +2 Metros de Deslocamento e recebe 2 de RD físico e 4 de RD paranormal com o elemento opressor da sua arma."
                    },

                    {
                        epeem: 40,
                        nome: "Viciado em Combate",
                        descricao: "A versão base de um corromper arma de sua escolha sempre estará ativo em qualquer arma que você pegar (mas caso solte ela, o efeito some.) Você recebe +1 dado de dano no seu amaldiçoar arma."
                    },

                    {
                        epeem: 65,
                        nome: "Determinação",
                        descricao: "Ao realizar um ritual que toma uma ação padrão, você pode gastar 2 PE realizar um ataque corpo a corpo como ação livre. Além disso, Corromper arma se torna ação livre. Sua margem de crítico é aumentada em 1 para qualquer arma corpo a corpo."
                    },

                    {
                        epeem: 99,
                        nome: "Carrasco",
                        descricao: "Você pode gastar 2 de PE para adicionar +2 dados de amaldiçoar arma nos seus golpes corpo a corpo, caso gaste +3 de PE, adicione +2 dados no dano do amaldiçoar arma, depois de ter feito isso, você pode gastar +5 de PE para causar dano máximo em todos os dados."
                    }
                ]
            },
            "Receptáculo": {
                descricao: "",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Roubo de Essência",
                        descricao: "Ao atacar um alvo com Faca, Correntes ou Golpe Desarmado, você consegue fazer um teste de Ritualismo contra o Resistir dele para roubar a essência do seu alvo, concedendo assim +1 dado no seu próximo Ritual, Teste de Ataque ou Teste de Defesa, causar dano crítico consegue 2 dados ao invés de 1. Você ataca e realiza Rituais com Intuição, você pode trocar todo grau de treino em Ritualismo por um Ritual de sua escolha. Você sempre pode trocar rituais escolhidos em Cenas de Interlúdio. Você não pode obter poderes de Classe, apenas paranormais."
                    },

                    {
                        epeem: 25,
                        nome: "Iniciação",
                        descricao: "Você recebe +1 na margem de crítico para cada 5 de Sanidade Perdida. Recebe PV e PE equivalente ao seu CON. Escolha um caminho Elemental e depois aos 50% escolha outro. Punição - Seu corpo aumenta em estatura e músculos, você recebe RD 5+FOR Perfurante e a Punição. Todos os. Culpa - Seu corpo começa a ficar mais frio em temperaturas impossíveis para o corpo do ser humano. Recebe RD 5+INF Cortante e a Culpa, todos os seus ataques e diminuem o Deslocamento igual a sua INF, Rituais diminuem o dobro.. Agonia - Seu corpo começa a ficar numa temperatura de febre e seu metabolismo acelera. Recebe RD 5+RES a Contundente."
                    },

                    {
                        epeem: 40,
                        nome: "",
                        descricao: ""
                    },

                    {
                        epeem: 65,
                        nome: "",
                        descricao: ""
                    },

                    {
                        epeem: 99,
                        nome: "",
                        descricao: ""
                    }
                ]
            },
            "Alma Iluminada": {
                descricao: "Um tipo de Agente que busca e estuda o Paranormal de forma muito obsessiva, usando muitas vezes esses conhecimentos das artes mágicas negras para eliminar alvo com uma eficiência assombrosa.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "O Olhar do Lúmen",
                        descricao: "Você é capaz de enxergar o paranormal de forma mais clara permanentemente. Você está com o ritual da Venda Oculta ativa a todo momento, conseguindo ver com mais clareza os elementos e o fluir da energia. Recebe +5 em Percepção, caso seja treinado esse bônus se torna +2. Recebe +2 em testes de Ritualismo e Intuição."
                    },

                    {
                        epeem: 25,
                        nome: "Verbo Esquecido",
                        descricao: "Você consegue utilizar Rituais de toque e alcance pessoal em Alcance Curto. Recebe +2 Turnos de duração em rituais de Suporte ou +1 dado de efeito, em 40% se torna +1 turno de duração e em 65% +1 dado de efeito e 99% Você se torna imune a ser intimidado, seduzido e enganado."
                    },

                    {
                        epeem: 40,
                        nome: "Percepção sem Igual",
                        descricao: "Você fica imune a ataques desprevenidos e a efeitos de cegueira/surdez/diminuição na percepção. Recebe Visão no escuro."
                    },

                    {
                        epeem: 65,
                        nome: "Além da Visão e Audição",
                        descricao: "Recebe metade da sua Percepção (arredondado para baixo) como Defesa. O Bônus de percepção também é válido para rituais e habilidades ofensivas, você é capaz de enxergar através de olhos de invocações, inimigos e aliados caso mantenha a mão pressionada sobre eles por 5 segundos e ler os pensamentos deles caso mantenha a mão pressionada por 2 minutos."
                    },

                    {
                        epeem: 99,
                        nome: "Seis Olhos",
                        descricao: "Os limites do corpo humano já não fazem diferença, você consegue enxergar mesmo se tiver seus olhos removidos ou danificados, capaz de ouvir mesmo que acabe ficando surdo, andar e correr mesmo que você tenha alguma doença ou cicatriz permanente. Você recebe um corpo mais jovem e mais poderoso que o normal, além dos 6 olhos sobre sua cabeça, é claro. +1 em todos os atributos."
                    }
                ]
            },
            "Olho Paranormal": {
                descricao: `Um tipo de Agente Atirador com altas capacidades Paranormais, aparentemente um dos olhos de cada Agente deste tipo, parece ter uma cor e algum tipo de símbolo em sua íris… Estranho mas parece ajudar bastante no combate.
                
                Condição Especial: Para ser dessa trilha é necessário treino em Pontaria.`,

                poderes: [
                    {
                        epeem: 10,
                        nome: "Precisão Inumana",
                        descricao: "Você aprende um ritual de corromper armas, e o custo de todos eles é reduzido em -1 PE e quando for atacar, pode atacar com Ritualismo ao invés de usar Pontaria. Aumente o multiplicador em 1x da arma a distância que estiver usando. Você consegue utilizar rituais de corrupção de arma opostos ao elemento da arma/artefato."
                    },

                    {
                        epeem: 25,
                        nome: "Olho Paranormal",
                        descricao: "Ao gastar 2 de PE  você pode aumentar a margem de ameaça de crítico em +2 por um ataque, apenas uma vez por rodada. Ou Gastar 3 de PE e sua Reação para atacar com arma de fogo um inimigo que foi atacado por um aliado recentemente."
                    },

                    {
                        epeem: 40,
                        nome: "Roundabout",
                        descricao: "Uma vez por rodada, quando você usar um ritual que toma sua Ação Padrão ou Ação Completa, você pode realizar um ataque com arma de fogo como ação livre."
                    },

                    {
                        epeem: 65,
                        nome: "Bullseye",
                        descricao: "Você consegue permanentemente +1 na ameaça de crítico da sua arma. Você pode gastar 2 de PV para adicionar 2 de dano fixo em um ritual ou disparo com o máximo de usos equivalente ao seu CON, e você pode usar esta habilidade a cada 2 turnos."
                    },

                    {
                        epeem: 99,
                        nome: "Bobeou, Tomou",
                        descricao: "Você pode gastar 3 de PE para adicionar seu CON na margem de crítico. Seus disparos ignoram resistência e imunidade física e elemental. Recebe +1 no multiplicador da sua arma."
                    }
                ]
            },
            "Invasor de Rede": {
                descricao: "Condição Especial: Para ser dessa trilha é necessário treino em Tecnologia",

                poderes: [
                    {
                        epeem: 10,
                        nome: "Nulificação Tecnológica",
                        descricao: "Você recebe um item chamado de Nulificador de Barreira, ele é um item especial (como uma caixa ou algo que pode ser acoplado a alguma arma ou utensílio que possua) que permite ao usuário interagir melhor com o Paranormal. Enquanto o utiliza, você poderá conjurar Rituais utilizando Tecnologia ao invés de Ritualismo, e a DT dos rituais passa a usar CON. Ao gastar uma ação de movimento, o usuário pode ativar o item e conjurar rituais independente do estado da Barreira Espiritual até o início da próxima rodada, ignorando o estado da Barreira Espiritual. O item tem categoria 0, ocupa 0,5 espaços, possui Defesa 10, 50 PV e RD 10. Ativar o Nulificador de Barreira, os seus rituais ganham a capacidade de Crítico, recebendo +1 na margem de crítico aos 20% e 80%, e mais 1 dado em 40% e 60% Você só pode utilizar armas que estão com o Nulificador de Barreira."
                    },

                    {
                        epeem: 15,
                        nome: "QuickHack",
                        descricao: "Você pode armazenar um ritual em um objeto ou Chip em vez de ativá-lo imediatamente. Enquanto o ritual estiver guardado, os PE gastos não se recuperam. Para liberá-lo, é preciso ativar o Nulificador de Barreira e gastar a mesma ação necessária para conjurar o ritual original. Você pode utilizar Combate ou Pontaria com CON. Você pode armazenar QuickHacks igual ao seu CON e poder conjurar dois de uma vez aos 25%. Aos 40% você consegue ativar os QuickHacks sem o Nulificador de Barreira. Aos 75% dar crítico em um ritual armazenado faz você não gastar metade dos PE utilizados no armazenamento do Ritual."
                    },

                    {
                        epeem: 25,
                        nome: "Processador Melhorado",
                        descricao: "Você escolhe rituais iguais ao seu CON para reduzir o custo em PE deles por 1 e aos 70% você reduz igual ao seu CON. Aumenta a margem de crítico de seus rituais amplificados pelo Nulificador de Barreira em 1."
                    },

                    {
                        epeem: 40,
                        nome: "Mais memória RAM",
                        descricao: "Você consegue armazenar QuickHacks equivalente ao dobro do seu CON. Troque o atributo base de duas perícias para CON. Aumenta a margem de crítico de seus rituais amplificados pelo Nulificador de Barreira em 1."
                    },

                    {
                        epeem: 65,
                        nome: "",
                        descricao: ""
                    },

                    {
                        epeem: 99,
                        nome: "",
                        descricao: ""
                    }
                ]
            },
            "Replicante": {
                descricao: "A sua capacidade de Assimilar Energia Paranormal é um tanto quanto especial, você é capaz de conseguir reconhecer e de certa forma replicar Rituais de Elementos, de Habilidades Inatas e Contratos usando o Dom que o Outro Lado te Concedeu.",

                poderes: [
                    {
                        epeem: 10,
                        nome: "CTRL C, CTRL V",
                        descricao: "Você é capaz de sentir Rituais que você conhece em alcance médio, sendo impossível ser pego Desprevenido por Rituais que você conhece. Uma vez por Rodada, quando um Ritual for utilizado em Alcance Médio, você poderá realizar um teste de Ritualismo 13 + Círculo do Ritual x5 para conseguir decifrar como a Energia Espiritual é utilizada e que Patrono Permite a utilização de Tal Ritual, ao realizar com sucesso 3 vezes durante a Cena, você é capaz de Transcrever esse Ritual para sua Mente gastando PE Permanente e Sanidade Permanente igual ao Círculo do Ritual. 1º Círculo custa 1 de PE e 1 de Sanidade, 2º Círculo custa 2 de PE e 2 de Sanidade, 3º Círculo custa 3 de PE e 3 de Sanidade, 4º Círculo Custa 4 de PE e 4 de Sanidade. Você consegue utilizar rituais em alcance queima-roupa para receber +1 dado de dano. Recebe +1 de PV a cada 5% de PV."
                    },

                    {
                        epeem: 25,
                        nome: "Upgrade",
                        descricao: "A cada 2 Rituais copiados, você recebe +1 de Dano ou Cura fixa em todos os seus Rituais e o Dado do seu Amaldiçoar Arma vai de 1d6 para 1d8. Você pode realizar um Ritual Ofensivo ou de Cura Copiado  ou não como reação quando for atacado corpo a corpo, o Ritual deve ter conjuração de apenas um alvo. Um amaldiçoar arma de um elemento de sua escolha se torna um ritual passivo, precisando somente ser ativado gastando uma ação de Movimento e sem custo de PE. Ao estar com a Arma Amaldiçoada, receba +1d20 no teste de ataque contra um ser."
                    },

                    {
                        epeem: 40,
                        nome: "Paranormalidade",
                        descricao: "Seu Corpo se adaptou aos vários Rituais que você Copiou, você pode realizar a Conexão de um Elemento aos 40% de EPEEM ao invés dos 50%, ao chegar em 50%, receba um Poder Paranormal do elemento que você se Conectou. Rituais do seu Elemento podem ser conjurados na versão Verdadeira e precisam de 1 teste a menos para ser copiado. Você se torna incapaz de Copiar Rituais do elemento que oprime o seu, você perde acesso a esses Rituais e recebe 1 de PV Permanente. Você pode amaldiçoar sua arma com mais de um ritual."
                    },

                    {
                        epeem: 65,
                        nome: "Estilo Yuta",
                        descricao: "Você copia uma habilidade de 10% de EPEEM de uma trilha. Caso tenha um Poder de Destino, realize normalmente o Teste de Cópia de um Ritual visto de um Contrato, Fé e Santidade, Poder Psíquico e Habilidade Inata para copiar ela por uma Cena, quando a Cena acabar, você perde acesso a essa Habilidade. Quando iniciar um Combate, Receba PE temporário igual ao seu CON que durará o dobro de seu CON de turnos."
                    },

                    {
                        epeem: 99,
                        nome: "Okkotsu Type",
                        descricao: "Você copia a Habilidade 99% de EPEEM de uma Trilha de sua Escolha."
                    }
                ]
            }
        },
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
        limitePericias: 3,
        proficiencias: [
            "Armas Simples", "Armas Exóticas"
        ]
    },

    Ascetico: {
        trilhas: {
            "Devorador": {
                descricao: "No seu primeiro encontro com o Paranormal deu terrivelmente errado, você sente que algo estranho se instaurou em seu sangue, na sua força vital, algo se emaranhou. Uma sede de sangue não natural e uma fome anormal colocou uma vontade primitiva em sua mente, a de devorar e de lutar.",

                poderes: [
                    {
                        epeem: 5,
                        nome: "Inumanidade",
                        descricao: `Por você ter uma conexão instável com o paranormal você possui algumas características que representam sua Inumanidade, escolha duas Desvantagens Fortes ou Uma desvantagem Forte e duas fracas. Você precisa consumir sangue de alguma forma pelo menos 2 vezes em um dia, se não, recebe Fadiga I e Fome I, ficando progressivamente pior a cada dia, até você morrer. O Começo da Sua Inumanidade é marcado pelas alterações corporais intensas, você pode gastar 2 de PE para causar dano do elemento de Cortante em algum alvo Paranormal ou da Realidade e sugando seu sangue para causar 1d8 de dano e recuperar o dobro do valor do dano causado como PV. A Cada golpe corpo a corpo ou disparo à distância visceral, regenere 1d3 de PV.

                        Desvantagens Fracas:
                        Sangue de Má qualidade: Você é incapaz de sugar sangue de animais, pessoas sujas e doentes, ao fazer isso, recebe a Condição de Status Enjoado até a próxima Cena de Interlúdio.

                        Incopentente: Recebe 1 perícia a menos.

                        Superstição: Você recebe 1 dado a mais de dano de armas de Prata e dano extra equivalente ao atributo de ataque do ser e você é incapaz de enpunhar qualquer coisa de prata e objetos santos.

                        Aura Negativa: Sua Aura é perceptível quando você quer realizar uma ação negativa contra um ser, receba -1 dado e -5 em testes de Enganação, Sedução e Diplomacia.

                        Perturbação: O Outro Lado quer te incomodar até nos poucos momentos de descanso que você tem, role 1d10 em ações de interlúdio, se cair o número 1, você perde 1 ação de interlúdio.

                        Isolamento: Usando a Ação de Interlúdio Descansar, sempre conta como se você estivesse sozinho, perdendo os bônus de animais de aliados e de aliados.

                        Fragilidade Mental: Receba -1 dado em testes de Resistir.

                        Fragilidade Física: Receba -1 em testes de Fortificação.

                        Instabilidade Emocional: Sempre que um companheiro entrar no estado de Caído você perde 1d6 de sanidade. 

                        Desvantagens Fortes:

                        Instinto Assassino: Sempre que falhar num teste de O Custo do Paranormal, Presença do Medo ou Intimidação, ataque o ser mais próximo.

                        Características Vampíricas: Sua aparência diz muito sobre você, sua pele pálida, seus olhos estranhos e suas presas não é fácil de esconder, você é incapaz de viver em sociedade e você é desprezado por sua aparência, exceto em regiões ou lugares mais pobres.

                        É sério isso?: Você não pode entrar em lugares que não for convidado e você é fraco contra alho.

                        Espírito Fraco: Você recebe -1 de PE por 5% de EPEEM

                        Mente Vazia: Você recebe -1 de SAN por 5% de EPEEM

                        Corpo Esguio: Você recebe -1 de PV por 5% de EPEEM

                        Cegueira Espiritual: Ao falhar num teste de Presença do Medo, você é incapaz de reconhecer o Ser Paranormal como Inimigo, você precisa fazer um teste de Religião, Ritualismo, ou para reconhecer aquele ser como inimigo DT 16+3.x
                        sendo x o valor de turnos passados. Um aliado seu pode realizar um teste de Diplomacia, Religião ou Ritualismo para você reconhecer o Ser Paranormal como Inimigo sendo X igual a quantidade de vezes que ele tentou.

                        Medo Inconcebível: Você recebe uma Fobia extra.

                        Origem Sagrada: Seu personagem recebe a Condição de Status Amedrontado (ignora imunidade) toda vez que um Ritual de Iluminação for realizado ou estiver vendo um Símbolo Cristão no campo de visão, essa condição some após parar de ver essas coisas.`
                    },

                    {
                        epeem: 10,
                        nome: "Sangue-Jovem",
                        descricao: `Bruto: Postura de Batalha - Ao gastar 1 de PE você e uma ação de movimento, você se mantém em uma postura de batalha, podendo atacar até 2 alvos adjacentes com 1 golpe. Caso acerte o golpe com alvos adjacentes, cause +1d4 de dano.
                        Sabotador: Concentração Sombria - Uma vez a cada 2 turnos, pode se tornar parcialmente invisível até o final do seu próximo turno. Seu próximo teste recebe +1d6 ou seu próximo ataque recebe +1d4 de dano.
                        Executor: Pele de Mármore - Você recebe RD 2 de todos os danos físicos, ao ser atacado por um Ritual ou Arma, você pode gastar 2 de PE para endurecer sua pele e reduzir o dano em 2d8+RES
                        Modelo: Projeção - Você é capaz de soltar uma projeção sua em alcance curto que pode enganar alguém com um teste de Sedução, com uma ação de movimento você pode trocar de lugar com sua projeção, após 1 turno ou ao ser atacada sua projeção some. Caso troque de lugar ou engane alguém, recebe +2 na próxima ação, +3 aos 15%, +4 aos 20% e +% aos 25%.`
                    },

                    {
                        epeem: 15,
                        nome: "Fortalecimento de Sangue",
                        descricao: `O Sangue que corre em suas veias altera completamente a sua estrutura, fazendo assim você ter acesso a poderes paranormais de Famílias de Devoradores antigos, ocultos nas sombras.
                        Bruto: Regeneração Insana - Gaste 2 PE para recuperar 1d6+1 PV por turno durante 3 turnos. 
                        OU
                        Pele Resistente - Escolha dois elementos (físicos ou paranormais). Você recebe RD contra eles igual ao dobro de um atributo à sua escolha.
                        Você pode substituir o atributo-base de duas perícias por FOR.

                        Sabotador: Passagem Obscura - Você consegue atravessar ou entrar em espaços que normalmente seriam inacessíveis.Além disso: não pode ser Agarrado; suas unhas contam como utensílio de Crime pode utilizar Furtividade para realizar ataques ou conjurar Rituais. Você pode substituir o atributo-base de duas perícias por AGI.
                        OU
                        Instinto de Caça - Você recebe um instinto de caça te tornando assim num caçador nato, você é capaz de sentir o cheiro de sangue e diferenciar de qual ser é qual, ao tomar o sangue você descobre informações da indentidade daquele ser com informações que o Mestre dá, a principal é sempre o nome e o sexo. Você consegue ignorar à necessidade de uma perícia de combate ao utilizar armas. Em 40% você recebe +1d20 ou +1 dado de dano. em 65% você recebe +2d20 ou 2 dados de dano, estes efeitos contam apenas com quem você tomou o sangue.
                        Executor: Presença Subjugadora - Em alcance curto, sua presença reduz o deslocamento de inimigos em 3 metros e impõe -2 em seus testes. Você não pode ser pego desprevenido. Além disso, pode utilizar Intimidação para realizar ataques e Rituais.
                        OU
                        Julgamento - Escolha uma criatura em alcance curto. Ela se torna seu alvo. Enquanto ela estiver marcada, você não pode atacar outras criaturas, mas recebe +1d8 em testes contra ela. Ao eliminá-la, a habilidade entra em recarga por 1 turno.

                        Modelo: Charme Único - Você pode utilizar Sedução para realizar ataques e Rituais.
                        Contra uma criatura atraída pelo seu comportamento, recebe +5 em testes que não sejam ataques, Pontaria ou Ritualismo. Além disso, pode realizar Descansar ou Treinar gratuitamente durante um Interlúdio.
                        OU
                        Ato Final - Você manipula relações sociais e prepara pessoas para servirem aos seus interesses. Recebe +5 em Enganação, Diplomacia e Sedução durante cenas sociais nas quais tenha tempo para preparar sua abordagem.`
                    },

                    {
                        epeem: 20,
                        nome: "Arquétipo Único",
                        descricao: `Bruto: Onda de Choque - Você concentra a força monstruosa do próprio corpo e libera um impacto brutal. Por 3 de PE, Ação Padrão: Realize um ataque em uma área de alcance curto. Todas as criaturas na área devem realizar um teste de Reflexos. Em caso de falha, sofrem 3d8+3 de dano de sua Afinidade Elemental e são empurradas 1d6+2 metros. Em caso de sucesso, sofrem metade do dano e não são empurradas. 40%: O dano aumenta para 5d8+5, o empurrão aumenta para 1d8+4 metros e as criaturas que falharem no teste ficam caídas. 65%: O dano aumenta para 7d8+7, o alcance passa para médio, e criaturas que obtiverem sucesso ainda sofrem metade do dano. Além disso, o ataque ignora RD Física.

                        Sabotador: Bomba Tóxica - 3 PE, Ação Padrão: Você cria e arremessa uma bomba feita do sangue tóxico dos Sabotadores em um ponto em alcance curto. Ela pode explodir quando uma criatura se aproximar ou por seu comando. Ao explodir, causa 4d4+4 de dano de um elemento ao qual você possua afinidade em uma área de alcance curto. Criaturas atingidas ficam Envenenadas II por 3 turnos. 40%: O dano aumenta para 4d6+4, o efeito passa para Envenenado III e a duração aumenta para 4 turnos. 65%: A explosão ignora RD Elemental e criaturas imunes a efeitos de Status ainda sofrem o efeito de Envenenado III. A duração aumenta para 5 turnos. Status, aumenta a duração de turnos de 3 para 5.

                        Executor: 4 PE, Ação Padrão: Você realiza um avanço monstruosamente rápido em linha reta, atravessando paredes e levando consigo qualquer objeto ou criatura que esteja em seu caminho. Ao atingir uma criatura, causa 3d4 de dano de sua Afinidade Elemental e a arremessa 1d6+2 metros. O alvo também fica impedido de utilizar Rituais por 2 turno. 40%: O dano aumenta para 3d6+3, o deslocamento forçado para 1d8+3 metros e a duração da incapacidade de utilizar Rituais passa para 3 turnos. 65%: O dano aumenta para 3d8+4, o alvo fica impedido de utilizar Rituais por 4 turnos e o avanço passa a ignorar RD Física.

                        Modelo: Morcegos Irritantes - 2 PE, Ação Padrão: Você invoca uma nuvem de morcegos sobrenaturais que permanece em uma área de alcance médio por até 5 turnos. Você pode enxergar e ouvir através deles enquanto estiverem ativos. Os morcegos podem procurar criaturas, seguir rastros e servir para intimidar ou dispersar pessoas. 40%: Os morcegos podem se concentrar em uma criatura, causando 2d6+2 de um elemento de sua Afinidade durante sua duração. A criatura também recebe esta quantidade para contrariar a cura que ela receber enquanto estiver sendo perseguida. 65%: Você pode dividir os morcegos entre até 3 criaturas. Cada uma sofre o dano normalmente e recebe a redução de cura. Além disso, os morcegos ignoram camuflagem e escuridão não sobrenatural para localizar seus alvos.
`
                    },

                    {
                        epeem: 25,
                        nome: "Armamento Sanguíneo",
                        descricao: "Seu corpo já não consegue conter a energia Paranormal, fazendo com que parte dela se manifeste como uma arma natural. Ao adquirir esta habilidade, escolha um Elemento ao qual você possua Afinidade. Você manifesta permanentemente uma arma natural relacionada a esse Elemento, como garras, lâminas, tentáculos, presas, espinhos ou outra forma aprovada pelo Mestre. A arma utiliza as regras de uma arma comum de Categoria 1, mas seu dano é do Elemento escolhido. Arma Corpo a Corpo: A arma causa 2d6+2 de dano de um elemento de sua escolha. Arma de Alcance: A arma possui alcance Médio e causa 2d6+2 de dano de um elemento de sua escolha. Sua munição é criada pelo próprio corpo. Você possui uma quantidade de munição igual ao dobro do seu atributo utilizado para atacar. Recuperar toda a munição exige 1 PE e uma Ação de Movimento. A arma desaparece caso você fique inconsciente, mas retorna quando recuperar a consciência. Caso você tenha duas afinidades ou mais, você pode trocar de tipo de dano utilizando uma ação de movimento."
                    },

                    {
                        epeem: 40,
                        nome: "Fome Insaciável",
                        descricao: `Sua fome já não pode ser controlada. Quanto mais sangue derrama, mais difícil se torna parar. Ao entrar em combate, você recebe 1 Marca de Fome. Sempre que sofrer dano; reduzir uma criatura a 50% dos PV; ou eliminar uma criatura; você pode receber 1 Marca de Fome adicional, até o máximo de 4. Para cada Marca de Fome, recebe: +1 em testes de ataque.
                        Ao atingir 4 Marcas, você entra em Frenesi: recebe +1 dado de dano; recebe +3 metros de deslocamento; não pode realizar ações para fugir voluntariamente do combate; sempre que eliminar uma criatura, recupera 1d6 PV. O Frenesi dura até o fim da cena. Ao final do combate, você deve realizar um teste de Vontade. Caso falhe, recebe Fome I e precisa consumir sangue antes de poder realizar um novo descanso.
                        Especial — Fome Crítica
                        Enquanto estiver em Frenesi, caso seus PV estejam abaixo da metade, seus ataques recebem +1d6 de dano adicional.`
                    },

                    {
                        epeem: 65,
                        nome: "Apoteose do Devorador",
                        descricao: `Seu corpo finalmente compreende que tudo aquilo que possui vida, sangue ou essência pode ser alimento. A fome deixa de ser uma necessidade e passa a ser uma força sobrenatural.
                        Fome Transcendente: Sua Fome Insaciável agora pode possuir até 8 Marcas de Fome. Você ainda recebe +1 de dano fixo por Marca, após a quarta.
                        Ao atingir 8 Marcas, você entra em Frenesi Absoluto: recebe +2 dados em ataques; recebe +5 metros de deslocamento; seus ataques ignoram RD; não pode ser Agarrado, Derrubado ou Desarmado; sempre que causar dano, recupera 1d8 PV; ao reduzir uma criatura a 0 PV, recupera 1d6 PE; sua Fome Crítica passa a conceder +2d6 de dano adicional. Enquanto estiver em Frenesi Absoluto, você não pode escolher voluntariamente encerrar o Frenesi. O Frenesi termina apenas quando a cena acabar ou quando você não possuir mais inimigos capazes de lutar
                        Arma Natural: Manifestação Suprema. A arma criada pela habilidade de 25% EPEEM evolui junto com seu corpo. Sua arma natural passa a: aumentar seu dano em +1 dado; receber +2 de dano fixo por Marca de Fome; ignorar RD do Elemento escolhido; ser considerada uma arma de Categoria 3, independentemente da Categoria original; não poder ser destruída, quebrada ou desarmada por meios convencionais.
                        Arma Corpo a Corpo: O dano passa para 3d8+3. Além disso, sempre que realizar um Crítico, você pode imediatamente realizar um ataque adicional contra o mesmo alvo.
                        Arma à Distância: O dano passa para 3d6+3 e o alcance aumenta em uma categoria. Sua munição deixa de ser limitada pelo dobro do atributo: ela passa a ser igual ao triplo do atributo utilizado no ataque. Você pode recuperar toda a munição com 1 PE, sem precisar gastar uma ação.`
                    },

                    {
                        epeem: 99,
                        nome: "Imortalidade",
                        descricao: "Caso seu personagem morra, você pode gastar metade da sua Sanidade e PV Permanente para voltar a vida, você não recebe desvantagens ao perder partes do corpo ou órgãos vitais e pode regenerar partes do corpo e órgãos vitais ao gastar ação de descansar em duas ações de interlúdio. Caso seu personagem esteja caído, ele poderá fazer suas ações normalmente e não pode ser executado."
                    }
                ]
            },
            "Atormentado": {
                descricao: "Caso seu personagem morra, você pode gastar metade da sua Sanidade e PV Permanente para voltar a vida, você não recebe desvantagens ao perder partes do corpo ou órgãos vitais e pode regenerar partes do corpo e órgãos vitais ao gastar ação de descansar em duas ações de interlúdio. Caso seu personagem esteja caído, ele poderá fazer suas ações normalmente e não pode ser executado.",

                poderes: [
                    {
                        epeem: 5,
                        nome: "Bela Tormenta",
                        descricao: "Um ser Paranormal divide seu corpo com você. No início de cada Sessão ou Interlúdio, faça Resistir ou Religião DT 15. Se falhar, o Atormentado pode assumir o controle e agir contra seus interesses. Você pode gastar 1 SAN Permanente para refazer o teste. Se sua SAN chegar a 0, o Atormentado assume permanentemente até ser exorcizado com Religião DT 20. Você pode trocar voluntariamente de controle com o Atormentado para utilizar suas capacidades. Recebe 1 Ritual Passivo, ele sempre estará ativo."
                    },

                    {
                        epeem: 10,
                        nome: "Tormenta",
                        descricao: `Você se adapta à presença do Atormentado e pode atacar usando Religião. Escolha 1 Ritual Passivo: Reflexos Inumanos, Amaldiçoar Arma, O Melhor Tempero, Venda Oculta, Compreensão Espiritual ou Compreensão Assombrosa.
                        Forma Contida: RD igual à INF ou RES. Machucado: +1 dado em Perícias, exceto Pontaria, Ritualismo Ofensivo, Combate e Religião. +1 dado em Rituais de Suporte.
                        Forma Atormentada: +INF de dano fixo. Machucado: +1 dado de dano em ataques e Rituais Ofensivos.`

                    },

                    {
                        epeem: 25,
                        nome: "Objetivo Mútuo",
                        descricao: `Você pode realizar Barganha a qualquer momento. Cada sucesso concede 1 Ação Padrão extra, mas a DT aumenta em +5 a cada tentativa. Ao falhar, o Atormentado assume por INF turnos e a DT retorna ao normal. Recebe 1 Ritual Passivo adicional. 
                        Forma Contida: Pode assumir Debuffs e Efeitos Negativos de aliados. +INF nos testes enquanto estiver sob um efeito negativo.
                        Forma Atormentada: Dano Mental sofrido é reduzido pela metade. Pode transferir seus Debuffs e Efeitos Negativos para uma criatura em alcance Curto. A cada turno, teste contra o Atormentado para evitar atacar um aliado.`
                    },

                    {
                        epeem: 40,
                        nome: "O que não mata, fortalece",
                        descricao: `O seu corpo está coberto de cicatrizes físicas, os treinos, a tormenta da culpa, os combates insanos te encheram de marcas assim, te deixando mais forte do que nunca. Seu sofrimento deixou marcas permanentes.
                        Forma Contida: RD = 2× INF + RES. Machucado: Rituais de Suporte recebem +1 dado e +2 turnos de duração.
                        Forma Atormentada: +2× INF em Agredir e Rituais Ofensivos. +RES de dano fixo. Machucado: Rituais Ofensivos recebem +1 dado de dano e aplicam um Efeito Negativo do elemento utilizado.`
                    },

                    {
                        epeem: 65,
                        nome: "Correntes Divergentes",
                        descricao: `A Tormenta e você finalmente passam a agir em conjunto. Seu corpo manifesta correntes sobrenaturais que mudam de acordo com quem está no controle.
                        Você recebe +RES na Defesa e pode utilizar Correntes Divergentes 1 vez por cena gratuitamente. Usos adicionais custam 3 PE.
                        Forma Contida: Correntes da Superação. Você envolve uma criatura em alcance Curto com as correntes, protegendo-a do sofrimento. O alvo recebe 2d8+2 PV temporários e +2 dados de Resistir durante 3 turnos. Enquanto os PV temporários durarem, a criatura recebe RD 6 contra dano Paranormal.
                        Forma Atormentada: Correntes da Punição. Você prende uma criatura em alcance Curto e força o Atormentado a compartilhar sua dor. O alvo sofre 3d8+3 de dano do seu Elemento de Assimilação e fica Lento por 2 turnos. Enquanto estiver Lento, sempre que o alvo sofrer dano, você pode gastar 1 PE para causar +1d8 de dano do mesmo elemento.
                        Correntes Divergentes: Se você estiver Machucado, pode escolher utilizar a versão da Forma Contida ou Atormentada, independentemente da forma em que esteja.`
                    },

                    {
                        epeem: 99,
                        nome: "Besto Friendo e Correntes da Tormenta",
                        descricao: "Através de Transcendência Adaptativa, escolha um Ritual de Iluminação que possa conjurar e utilize sua versão Discente. Além disso, recebe o Ritual de Maldição Correntes da Tormenta."
                    }
                ]
            }
        },
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
        limitePericias: 3,
        proficiencias: [
            "Armas Simples", "Combate Desarmado"
        ]
    }
};

export default classes;