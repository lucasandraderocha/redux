// Buttons e Display
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const display = document.querySelector(".display");

const ADD = "ADD";
const SUB = "SUB";

const sum = () => {
  return { type: ADD };
};
const subtract = () => {
  return { type: SUB };
};

const initial = 0;

const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case ADD:
      return ++state;
      break;
    case SUB:
      return --state;
      break;
    default:
      return state;
  }
};

const { getState, dispatch, subscribe } = Redux.createStore(reducer);
let state = getState();

const render = () => {
  let state = getState();
  return (display.textContent = state);
};
subscribe(render);

add.addEventListener("click", () => dispatch(sum()));
sub.addEventListener("click", () => dispatch(subtract()));
