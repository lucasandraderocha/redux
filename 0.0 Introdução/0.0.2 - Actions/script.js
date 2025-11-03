// const INCREMENTAR = "INCREMENTAR";
// const SOMAR = "SOMAR";

// const somar = payload => {
//   return { type: SOMAR, payload };
// };

// const incrementar = () => {
//   return { type: INCREMENTAR };
// };

// const initial = 0;

// const reducer = (state = initial, { type, payload }) => {
//   let types = {
//     somar: () => state + payload,
//     incrementar: () => state + 1,
//   };

//   const action = types[type.toLowerCase()];
//   return action ? action() : state;
// };

// const store = Redux.createStore(reducer);
// let state = store.getState();

// store.dispatch(somar(9));
// store.dispatch(incrementar());

// state = store.getState();

// console.log(state);

const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const result = document.querySelector(".result");

const initial = 0;

const ADD = "add";
const SUB = "sub";

const add = () => {
  return { type: ADD };
};

const sub = () => {
  return { type: SUB };
};

const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "add":
      return (result.innerHTML = ++state);
      break;
    case "sub":
      return (result.innerHTML = --state);
      break;
    default:
      return;
  }
};

const { getState, dispatch } = Redux.createStore(reducer);
let state = getState();

btnAdd.addEventListener("click", () => {
  dispatch(add());
  state = getState();
  console.log(state);
});

btnSub.addEventListener("click", () => {
  dispatch(sub());
  state = getState();
  console.log(state);
});

console.log(result);
