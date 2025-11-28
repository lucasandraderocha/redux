const todo = () => {
  // HTMLElements
  const post = document.querySelector(".post");
  const task = document.querySelector(".task");
  const tasklist = document.querySelector("#tasklist");
  const tasklistCounter = document.querySelector(".tasklistCounter");
  const taskContent = document.createElement("p");
  const taskDelete = document.createElement("span");
  taskDelete.textContent = "×";
  taskDelete.classList.add("delete-btn");

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
    const { todos } = getState();
    tasklist.innerHTML = "";
    todos.forEach(todo => {
      const taskContainer = document.createElement("li");
      [
        "flex",
        "row",
        "ac",
        "jbtw",
        "brd-sm",
        "outline-sm",
        "px-sm",
        "py-sm",
      ].map(cls => taskContainer.classList.add(cls));
      const content = taskContent.cloneNode();
      content.textContent = todo.task;
      const remove = taskDelete.cloneNode(true);
      remove.dataset.id = todo.id;
      taskContainer.append(content, remove);
      tasklist.append(taskContainer);
    });
    tasklistCounter.textContent = todos.length;
  });

  // HTMLs Event
  const triggerAddEvent = () => {
    const generatedID = genId();

    dispatch({
      type: ADD_TASK,
      payload: { id: generatedID, task: task.value },
    });
  };

  const triggerRemoveEvent = ({ target }) => {
    const removeTarget = "delete-btn";
    if (target.className === removeTarget) {
      console.log("Deu boa: ", { e: target, dataset: target.dataset.id });
      dispatch(ON_REMOVE(target.dataset.id));
    }
  };

  post.addEventListener("click", triggerAddEvent);
  document
    .querySelector("#tasklist")
    .addEventListener("click", triggerRemoveEvent);
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
