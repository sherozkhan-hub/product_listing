export const initialStates = {
  // Initial States
  cartItems: [],
  total: 0,
  name: "",
  price: null,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      let item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        const updatedCartItems = state.cartItems.map((i) => {
          if (i.id === item.id) {
            console.log("quantity incremented");
            return { ...i, quantity: i.quantity + 1 };
          }
          return i;
        });

        return { ...state, cartItems: updatedCartItems };
      } else {
        item.quantity = 1;
        console.log(item, "itemmmmmmm");
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    }

    case "decrement": {
      let item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        const updatedCartItems = state.cartItems.map((i) => {
          if (i.id === item.id) {
            if (i.quantity === 1) {
              return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.id !== item.id),
              };
            }
            console.log("quantity decremented");
            return { ...i, quantity: i.quantity - 1 };
          }
          return i;
        });

        return { ...state, cartItems: updatedCartItems };
      }
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};
