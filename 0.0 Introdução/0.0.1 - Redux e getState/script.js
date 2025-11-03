const initial = { id: 0, name: "Lucas" };

const reducer = (state = initial, { type, payload }) => {
  if (type === "reveal") return { ...state, updated_at: payload };
  if (type === "refresh") return { ...state, id: payload };
  return state;
};

const store = Redux.createStore(reducer);
let state = store.getState();

store.dispatch({ type: "reveal", payload: "03/11/24" });
store.dispatch({ type: "refresh", payload: 1 });

state = store.getState();

console.log(state);
