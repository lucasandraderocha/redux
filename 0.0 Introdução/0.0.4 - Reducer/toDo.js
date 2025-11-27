const todo = () => {
  // HTMLElements
  const post = document.querySelector(".post");
  const task = document.querySelector(".task");

  // Global Variables
  const ADD_TASK = "ADD_TASK";
  const REMOVE_TASK = "REMOVE_TASK";
  // Action Type Functions
  const ON_ADD = payload => {
    return { type: ADD_TASK, payload };
  };

  const ON_REMOVE = id => {
    return { type: REMOVE_TASK, payload: id };
  };

  // initial State
  const initial = {
    todos: [
      {
        id: "@_hotmail",
        task: "fazer a janta",
      },
      {
        id: "@_madremia",
        task: "preparar a os legumes",
      },
    ],
  };

  // Reducer Function
  const reducer = (state = initial, { type, payload }) => {
    switch (type) {
      case ADD_TASK:
        return {
          ...state,
          todos: [...state.todos, payload],
        };
        break;
      case REMOVE_TASK:
        const { todos } = state;
        let filteredList = todos.filter(item => item.id !== payload);
        console.log(filteredList);
        return { todos: filteredList };
        break;
      default:
        return state;
    }
  };

  // Store Creation
  const { getState, dispatch, subscribe } = Redux.createStore(reducer);

  // Subscription Render
  subscribe(() => {
    const tasklist = document.querySelector("#tasklist");
    const tasklistCounter = document.querySelector(".tasklistCounter");
    const state = getState();
    // tasklist.innerHTML = state.todos
    //   .map(
    //     item =>
    //       `<li data-id="${item.id}" class="flex jbtw brd-sm outline-sm px-sm py-sm">
    //       <p>${item.task}</p>
    //       <span class="delete-btn" style="color: red">x</span>
    //     </li>`
    //   )
    //   .join("");

    tasklistCounter.innerHTML = tasklist.childNodes.length;
  });

  // HTMLs Event
  const triggerEvent = () => {
    const tasklist = document.querySelector("#tasklist");
    const { todos } = getState();
    console.log({ tasklist, todos });
    todos.map(item => tasklist.insertAdjacentElement);
    dispatch({
      type: ADD_TASK,
      payload: { id: genId(), task: task.value },
    });
  };

  post.addEventListener("click", triggerEvent);
  window.onload = () => {};
};

const genId = () => {
  const id = ["@_"];
  const map =
    "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz1234567890!#$%&*?";
  for (let i = 0; i < 16; i++) {
    const index = Math.floor(Math.random() * map.length);
    const test = [];

    id.push(map[index]);
  }
  return id.join("");
};

export default todo;
