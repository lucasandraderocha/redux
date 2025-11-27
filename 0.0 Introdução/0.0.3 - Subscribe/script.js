// HTMLElements
const btn = document.querySelector(".generate");
const display = document.querySelector(".display");
const quantity = document.querySelector("#quantity");

// Global Action Type
const GENERATE_NAME = "generate_name";

//  Global Action Dispatch Functions
const generateName = payload => {
  return { type: GENERATE_NAME, payload: generator(payload) };
};

// Syllables Pieces Array
const pieces = [
  "pri",
  "ar",
  "man",
  "nio",
  "cas",
  "lari",
  "gus",
  "gui",
  "la",
  "hen",
  "fla",
  "zaca",
  "kel",
  "ndo",
];

// Name Generator Function
const generator = quantity => {
  const buffer = [];
  for (let i = 0; i < quantity; i++) {
    let index = Math.floor(Math.random() * pieces.length);

    buffer.push(pieces[index]);
  }

  return buffer.join("");
};

//  Initial State
const initial = String("Insert the Syllables quantity and create a name.");

// Reducer
const reducer = (state = initial, { type, payload }) => {
  if (type === GENERATE_NAME) return (state = payload);
  return state;
};

//  Create Store by Redux.createStore
const { getState, subscribe, dispatch } = Redux.createStore(reducer);

//
// Render Function to Subscribe event in each triggered Dispatch
const render = () => {
  display.innerText = getState();
};
// Subscribe Function with Render function as callback
subscribe(render);

//
// Event function to trigger each time button is clicked
const generateNameEvent = () => {
  if (quantity.value == 0)
    return (display.innerText = "1 or + Syllables are required, atleast.");
  dispatch(generateName(quantity.value));
};
// Add a click event with a generateNameEvent as callback
btn.addEventListener("click", generateNameEvent);

window.onload = () => {
  display.innerText = getState();
};
