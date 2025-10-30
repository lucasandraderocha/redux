// const initial = {
//   nome: "Cristiano Ronaldo dos Santos Aveiro",
//   apelido: "CR7",
//   idade:
//     "Isto não importa, pois sou Lendário! A minha forma física desafia o calendário, e a história. Eu sou atemporal, como uma estátua grega em chuteiras.",
//   idolo: "Eu mesmo, mas apenas a versão de amanhã, que será ainda melhor.",
//   recordes: [
//     "Marcar em 5 Copas do Mundo (e contando)",
//     "Maior artilheiro de seleções e de clubes (óbvio!)",
//     "Primeiro jogador a virar meme em 4k",
//     "O que tem o melhor abdômen na sala de troféus",
//     "Ganhador de 5 Liga dos Campeões (Alguns times inteiros não têm isso!)",
//   ],
//   goat: {
//     primeiro:
//       "Na minha cabeça? Eu sou o melhor e o único. O debate é só para quem não entende de futebol.",
//     segundo: "O reflexo no espelho do meu primeiro troféu da Champions.",
//     terceiro: "O meu 'SIIIUUUU' gravado em loop.",
//     nota_do_goat: "Os outros só jogam xadrez, eu jogo a lenda.",
//   },
//   adjetivos: [
//     "Imparável",
//     "Incansável",
//     "Bonito",
//     "Goleador",
//     "Máquina",
//     "A Lenda",
//     "O Maior",
//     "Um Muro de Barriga Tanquinho",
//   ],
//   adiciona_a_rotina: {
//     manhã: "Acordar e agradecer a Deus por ser o Cristiano Ronaldo.",
//     tarde: "Treino hardcore e uma sessão de 'melhores momentos do CR7'.",
//     noite: "Contar os troféus (e os likes).",
//   },
//   adiciona_ao_contrato: {
//     clausula_1: "Garantia de que a camisa 7 é minha. Sempre.",
//     clausula_2: "Vaga cativa para o meu cabeleireiro particular.",
//     clausula_3: "Não pode ter Coca-Cola no vestiário.",
//     clausula_4: "Se houver disputa por pênaltis, eu marco todos.",
//   },
//   adote: [
//     "Fazer gol de bicicleta",
//     "Ouvir o nome dele (alto e em uníssono)",
//     "Gritar 'SIIIUUUUUUUUUUU' em todos os idiomas",
//   ],
//   musica_favorita:
//     "O Prêmio de melhor do mundo vai para... Cristiano Ronaldo! (Versão estendida, remix de golaços)",

//   // NOVOS OBJETOS ANINHADOS E MAIS CHAVES

//   imperio_cr7: {
//     marcas_pessoais: [
//       "CR7 Underwear",
//       "CR7 Fragrances",
//       "Hotéis Pestana CR7",
//       "Clinicas de Transplante Capilar",
//     ],
//     valor_de_mercado: "Incalculável (como um diamante perfeito e goleador)",
//     visao_estrategica: {
//       // Duplo aninhamento
//       meta_de_vida: "Ser o melhor fora de campo, tal como sou dentro de campo.",
//       patrocinios_exclusivos: {
//         chuteiras: "Apenas as que me tornam mais rápido que a luz.",
//         relógios: "Apenas os que valem mais do que o PIB de um país pequeno.",
//         bebidas: "Água, porque o meu desempenho é puro.",
//       },
//       investimentos: ["Onde houver potencial para ser o número 1"],
//     },
//   },

//   metodologia_do_golo: {
//     preparo_mental: "Pensar: 'Vou marcar, é inevitável.'",
//     preparo_fisico: {
//       dieta: "Apenas comida que corre mais devagar do que eu.",
//       sono: "Oito horas de sonhos sobre ser o melhor.",
//       banho_de_gelo: "Um aquecimento.",
//     },
//     celebracao_oficial: {
//       // Duplo aninhamento
//       nome: "O SIIIUUU",
//       passos: [
//         "Correr (Rápido, óbvio)",
//         "Saltar (Mais alto que o telhado, 2.56m para ser exato)",
//         "Girar (Com a classe de um rei)",
//         "Aterrar e gritar 'SIIIUUUUU!' (O grito de guerra da lenda)",
//       ],
//       patrimonio_cultural: "A minha marca registada. Deveria estar na UNESCO.",
//     },
//     percentual_de_talento: "1%",
//     percentual_de_trabalho_duro: "99% (E 100% de vaidade)",
//   },

//   status_social: {
//     likes_por_foto:
//       "Mais do que habitantes em muitas cidades (e muito mais do que os meus rivais)",
//     seguidores_no_instagram: "O maior número do planeta (Porque sou o Maior)",
//     titulo_favorito: "Sir Golaço",
//     media_interacao: {
//       // Duplo aninhamento
//       comentarios_positivos: "99% (o 1% restante está com inveja)",
//       perguntas_frequentes: [
//         "Como é ser tão lendário?",
//         "Qual o segredo da longevidade?",
//         "És tu o Goat?",
//       ],
//       resposta_padrao: "SIIIUUUU!",
//     },
//   },

//   analise_da_carreira: {
//     fases_historicas: {
//       // Duplo aninhamento
//       inicio_em_portugal: "O Despertar da Besta",
//       era_manchester:
//         "O Nascimento da Lenda e do Cabelo Gelado (Primeira Fase)",
//       era_madrid: "A Máquina de Gols Incontestável (Melhores Anos de Sempre!)",
//       era_juventus: "O Vencedor que Vence em Todo o Lado (A Prova Definitiva)",
//       regresso_manchester:
//         "O Herói Voltou para Salvar o Dia (E Marcar Mais Gols)",
//       era_atual: "O Desafio É Ser A Lenda Pela Milionésima Vez",
//     },
//     filosofia: "Futebol é sobre golos. E eu sou a definição de golo.",
//     estatisticas_basicas: {
//       // Triplo aninhamento
//       bolas_de_ouro: 5,
//       ligas_dos_campeoes: 5,
//       golos_na_carreira:
//         "Muitos, mais do que qualquer pessoa precisa saber para provar que sou o melhor.",
//       assistencias:
//         "Eu marco os meus próprios golos. Mas também ajudo quando preciso.",
//     },
//   },
// };

// const reducer = (state = initial, action) => {
//   const { type, payload } = action;

//   if (!state[type]) {
//     return { ...state, payload };
//   }

//   return state;
// };

// const store = Redux.createStore(reducer);
// let state = store.getState();

// store.dispatch({ type: "Ballon D'or", payload: { bola_ouro: 5 } });
// state = store.getState();
// console.log(state);
