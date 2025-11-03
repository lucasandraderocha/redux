// Display
const display = document.querySelector(".display");

const GENERATE_NAME = "GENERATE_NAME";

const pieces = [
  "gur",
  "alo",
  "pla",
  "pri",
  "son",
  "wu",
  "quen",
  "gui",
  "jix",
  "rot",
  "mto",
  "heq",
  "aax",
  "lav",
];

const initial = "";

const generateName = syllables => {
  return { type: GENERATE_NAME, payload: nameFactory(syllables) };
};

const nameFactory = syllables => {
  const buffer = [];
  for (let i = 0; i < syllables; i++) {
    let randomIndex = Math.floor(Math.random() * pieces.length);

    buffer.push(pieces[randomIndex]);
  }
  return buffer.join("");
};

const reducer = (state = initial, { type, payload }) => {
  if (type === "GENERATE_NAME") return (state = payload);
};

const { getState, dispatch, subscribe } = Redux.createStore(reducer);

const render = () => {
  let state = getState();
  display.innerText = state;
  console.log(state);
};
subscribe(render);

const btn = document.querySelector(".generate");
btn.addEventListener("click", () => dispatch(generateName(3)));
