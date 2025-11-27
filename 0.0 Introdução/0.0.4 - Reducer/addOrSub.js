const addOrSub = () => {
  const add = document.querySelector(".add");
  const sub = document.querySelector(".sub");
  const display = document.querySelector(".display");

  const ADD = "add";
  const SUB = "sub";

  const INCREMENT = () => {
    return { type: ADD };
  };
  const DECREMENT = () => {
    return { type: SUB };
  };
  const initial = Number();

  const reducer = (state = initial, { type }) => {
    switch (type) {
      case ADD:
        return state + 1;
        break;
      case SUB:
        return state - 1;
        break;
      default:
        return state;
        break;
    }
  };

  const { getState, dispatch, subscribe } = Redux.createStore(reducer);

  const render = () => {
    display.innerText = getState();
  };

  const triggerEvent = ({ target }) => {
    const params = {
      increment: INCREMENT(),
      decrement: DECREMENT(),
    };
    let dataType = args => args.attributes["data-type"].value;
    // params[dataType(target)];
    dispatch(params[dataType(target)]);
  };

  add.addEventListener("click", triggerEvent);
  sub.addEventListener("click", triggerEvent);

  subscribe(render);

  window.onload = () => {
    display.innerText = getState();
  };
};

export default addOrSub;
