// Constantes
const INCREMENTAR = "INCREMENTAR";
const SOMAR = "SOMAR";

// Action Creator
const incrementar = () => {
  return { type: INCREMENTAR };
};
const somar = payload => {
  return { type: SOMAR, payload };
};

const initial = 10;

const reducer = (state = initial, action) => {
  if (action.type === INCREMENTAR) return state + 1;
  if (action.type === SOMAR) return state + action.payload;
  return state;
};

const store = Redux.createStore(reducer);
let state = store.getState();

store.dispatch({ type: INCREMENTAR });
store.dispatch({ type: SOMAR, payload: 25 });

state = store.getState();

console.log(state);
