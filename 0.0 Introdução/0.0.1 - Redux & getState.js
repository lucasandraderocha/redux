// Objeto inicial utilizado como base para o estado da aplicação.
// Esses dados representam o estado inicial que será controlado e atualizado
// conforme as ações (actions) despachadas e as regras de negócio definidas no reducer.
const initial = {
  nome: "Allynero",
  idade: 63,
  curte: [
    { titulo: "Portal do Jaime", categoria: "Fofoca" },
    { titulo: "Jogo do Bicho", categoria: "Apostas" },
    { titulo: "Domingão do Faustão", categoria: "Entretenimento" },
  ],
};

// O reducer é uma função pura responsável por receber o estado atual e uma ação,
// processar essa ação conforme a lógica definida e retornar um novo estado.
// Importante: reducers nunca devem mutar o estado original — sempre retornam um novo objeto.
const reducer = (state = initial, { type, payload }) => {
  // Verifica se a action possui um type e um payload válidos.
  // Se não houver (por exemplo, durante a inicialização da store), apenas retorna o estado atual.
  if (!type || !payload) return state;

  // Garante que a propriedade 'curte' do estado é realmente um array.
  // Caso não seja (ou esteja corrompida), retorna um array vazio para evitar erros.
  const curteSegura = Array.isArray(state.curte) ? state.curte : [];

  // Verifica se já existe algum item na lista 'curte' cuja categoria corresponde à action.type.
  // O método .some() retorna true/false.
  const existe = curteSegura.some(
    item =>
      item && item.categoria.toLocaleLowerCase() === type.toLocaleLowerCase()
  );

  // Retorna o novo estado da aplicação.
  // Caso a categoria já exista, mapeia o array atual substituindo o item correspondente.
  // Caso contrário, cria um novo array com o item adicionado ao final.
  return {
    ...state,
    curte: existe
      ? curteSegura.map(curtiu =>
          // Retorna um novo objeto contendo a categoria e uma nova lista com títulos agregados.
          curtiu && curtiu.categoria.toLocaleLowerCase() === type
            ? { categoria: type, lista: [curtiu.titulo, payload.titulo] }
            : // Caso não corresponda, mantém o item original.
              curtiu
        )
      : // Se a categoria não existe, adiciona o novo item ao array.
        [...state.curte, payload],
  };
};

// Cria a store do Redux usando a função createStore, passando o reducer como argumento.
// A store centraliza o estado e fornece métodos para leitura (getState) e atualização (dispatch).
const store = Redux.createStore(reducer);

// Obtém o estado inicial da store.
let state = store.getState();

// O método dispatch envia uma ação para o reducer.
// Cada ação é um objeto que deve conter, obrigatoriamente, a propriedade 'type'.
// O 'payload' é opcional, mas geralmente contém os dados que o reducer usará para atualizar o estado.
store.dispatch({
  type: "entretenimento",
  payload: {
    titulo: "Domingo Legal",
    categoria: "Entretenimento",
  },
});

// Atualiza a variável 'state' com o novo estado após o dispatch.
state = store.getState();

// Exibe o estado atualizado no console.
console.log(state);
