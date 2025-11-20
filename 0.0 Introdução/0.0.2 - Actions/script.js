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
  if (!state) return 0;

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
const addInput = document.querySelector(".add-input");
const subInput = document.querySelector(".sub-input");
const multiInput = document.querySelector(".multi-input");
// Paragraph - Result
const result = document.querySelector(".result");
result.innerHTML = 0;

const asteristico = "*";
const buffA = ["9"],
  buffB = ["8"];
if (asteristico === "*") {
  const sanitizedBuffer = Number(buffA.join("")) * Number(buffB.join(""));
  console.log(sanitizedBuffer);
}

console.log(asteristico.codePointAt(0));
