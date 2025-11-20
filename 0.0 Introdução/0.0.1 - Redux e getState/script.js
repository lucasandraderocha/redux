const initial = {
  nome: "Lucas",
  id: 1,
};

const reducer = (state = initial, action) => {
  return state;
};

const store = Redux.createStore(reducer);

const state = store.getState();

console.log(state);
