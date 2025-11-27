// Global Variables
const SUM = "sum";
const SUB = "sub";
const MULTI = "multi";

const initial = 0;

// Global Action Function
const MAKE_SUM = value => {
  return { type: SUM, payload: value };
};

const MAKE_SUB = value => {
  return { type: SUB, payload: value };
};

const MAKE_MULTI = value => {
  return { type: MULTI, payload: value };
};

// Reducer Function
const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case SUM:
      return state + payload;
      break;
    case SUB:
      return state - payload;
      break;
    case MULTI:
      return state * payload;
      break;
    default:
      return state;
  }
};

// Factory Store Function
const store = Redux.createStore(reducer);
let state = store.getState();

// HTMLElements

// Button
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const multi = document.querySelector(".multi");
// Inputs
const input = document.querySelector(".input");

// Paragraph - Result
const result = document.querySelector(".result");
result.innerHTML = 0;

const addValue = () => {
  let value = Number(input.value);

  if (value > 1) {
    store.dispatch(MAKE_SUM(value));
  } else {
    store.dispatch(MAKE_SUM(1));
  }
  state = store.getState();
  input.value = "0";
};

const subValue = () => {
  const value = Number(input.value);

  if (value > 1) {
    store.dispatch(MAKE_SUB(value));
  } else {
    store.dispatch(MAKE_SUB(1));
  }
  state = store.getState();
  input.value = "0";
};

const multiValue = () => {
  const value = Number(input.value);
  if (value == 0) store.dispatch(MAKE_MULTI(0));

  if (value > 1) {
    store.dispatch(MAKE_MULTI(value));
  } else {
    store.dispatch(MAKE_MULTI(1));
  }
  state = store.getState();
  input.value = "0";
};

const addEvent = () => {
  addValue();
  result.innerHTML = state;
};

const subEvent = () => {
  subValue();
  result.innerHTML = state;
};

const multiEvent = () => {
  multiValue();
  result.innerHTML = state;
};

add.addEventListener("click", addEvent);
sub.addEventListener("click", subEvent);
multi.addEventListener("click", multiEvent);
