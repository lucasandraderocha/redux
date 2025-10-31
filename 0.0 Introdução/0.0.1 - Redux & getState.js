const initial = {
  nome: "Allynero",
  idade: 63,
  curte: [
    { titulo: "Portal do Jaime", categoria: "Fofoca" },
    { titulo: "Jogo do Bicho", categoria: "Apostas" },
    { titulo: "Domingão do Faustão", categoria: "Entretenimento" },
  ],
};

const reducer = (state = initial, { type, payload }) => {
  if (!type || !payload) return state;

  const curteSegura = Array.isArray(state.curte) ? state.curte : [];

  const existe = curteSegura.some(
    item =>
      item && item.categoria.toLocaleLowerCase() === type.toLocaleLowerCase()
  );

  return {
    ...state,
    curte: existe
      ? curteSegura.map(item =>
          item && item.categoria.toLocaleLowerCase() === type
            ? { categoria: type, lista: [item.titulo, payload.titulo] }
            : item
        )
      : [...state.curte, payload],
  };
};

const store = Redux.createStore(reducer);

let state = store.getState();

store.dispatch({
  type: "entretenimento",
  payload: {
    titulo: "Domingo Legal",
    categoria: "Entretenimento",
  },
});

state = store.getState();

console.log(state);
