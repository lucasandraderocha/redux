const cart = () => {
  //  Global variables
  const ADD = "ADD";
  const REMOVE = "REMOVE_ITEM";
  const CLEAR = "CLEAR_CART";

  //  Action Function
  const ADD_PRODUCT = payload => {
    return { type: ADD, payload };
  };

  const REMOVE_PRODUCT = id => {
    return { type: REMOVE, payload: id };
  };
  const CLEAR_CART = () => {
    return { type: CLEAR };
  };

  //  Initial State
  const initial = {
    cart: [
      {
        id: "@3578-9017-7001-6634-6061",
        name: "teste C",
        quantity: 1,
      },
      {
        id: "@0715-4624-2484-6883-6178",
        name: "teste B",
        quantity: 1,
      },
      {
        id: "@8136-0974-4175-5025-9612",
        name: "teste A",
        quantity: 1,
      },
    ],
  };
  //  Reducer Function
  const reducer = (state = initial, { type, payload }) => {
    switch (type) {
      case ADD:
        const filteredItem = state.cart.filter(item => {
          if (item.id === payload.id) item.quantity++;
        });
        break;
      case REMOVE:
        const filteredCart = state.cart.filter(item => item.id != payload);
        return { ...state, cart: filteredCart };
      case CLEAR:
        return { ...state, cart: Array() };
    }
  };

  //  Store Creation
  const { dispatch, subscribe, getState } = Redux.createStore(reducer);

  //  Subscription
  subscribe(() => {
    const { cart } = getState();
    console.log(cart);
  });

  // Test
  window.onload = () => {
    Array("teste A", "teste B", "teste C").forEach((item, index) => {
      const generatedID = genID();
      dispatch(ADD_PRODUCT({ id: `@${generatedID}`, name: item, quantity: 1 }));
      // dispatch(REMOVE_PRODUCT(`@${generatedID}`));
    });
    dispatch(
      ADD_PRODUCT({
        id: "@8136-0974-4175-5025-9612",
        name: "teste C",
        quantity: 1,
      })
    );
  };
};

const genID = () => {
  const indexes = "1234567890";
  const buffer = [];
  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * indexes.length);
    let separatorIndex = {
      4: 4,
      8: 8,
      12: 12,
      16: 16,
    };
    if (i === separatorIndex[i]) buffer.push("-");
    buffer.push(indexes[randomIndex]);
  }

  return buffer.join("");
};
export default cart;
