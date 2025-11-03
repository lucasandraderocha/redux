const syllables = [
  "wer",
  "man",
  "jut",
  "lor",
  "fas",
  "tuy",
  "vhu",
  "par",
  "xan",
  "inha",
  "cas",
  "kow",
  "ast",
  "qun",
  "kimo",
  "ger",
];

const displayName = document.querySelector(".displayName");
const btnGenerate = document.querySelector(".generate");

const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const display = document.querySelector(".display");

const GENERATE_NAME = "GENERATE_NAME";

const ADD = "ADD";
const SUB = "SUB";

const add = () => {
  return { type: ADD };
};

const sub = () => {
  return { type: SUB };
};

const generateName = amount => {
  return { type: GENERATE_NAME, payload: nameFactory(amount) };
};

const counter = (state = 0, { type, payload }) => {
  switch (type) {
    case ADD:
      return ++state;
      break;
    case SUB:
      return state <= 0 ? state : --state;
      break;
    default:
      return state;
  }
};

const nameFactory = amount => {
  let buffer = [];
  for (let i = 0; i < amount; i++) {
    let randomIndex = Math.floor(Math.random() * syllables.length);

    buffer.push(syllables[randomIndex]);
  }
  let result = buffer.join("");
  return result;
};

const createName = (state = 0, { type, payload }) => {
  switch (type) {
    case GENERATE_NAME:
      return (state = payload);
      break;
    default:
      return state;
  }
};

const reducer = Redux.combineReducers({ createName, counter });

const { getState, dispatch, subscribe } = Redux.createStore(reducer);

const render = () => {
  let { createName, counter } = getState();
  displayName.textContent = createName;
  display.textContent = counter;
};

subscribe(render);
btnGenerate.addEventListener("click", () => {
  let amount = Number(display.textContent);
  dispatch(generateName(amount));
});

btnAdd.addEventListener("click", () => dispatch(add()));
btnSub.addEventListener("click", () => dispatch(sub()));
