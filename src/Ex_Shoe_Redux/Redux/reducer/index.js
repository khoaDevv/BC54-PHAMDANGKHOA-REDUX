import { shoeArr } from "../../data";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  // cart: shoeArr,
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_DETAIL": {
      state.detail = action.payload;
      return { ...state };
    }
    case "ADD_CART": {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (index === -1) {
        let newCart = { ...action.payload, cartQuantity: 1 };
        cloneCart.push(newCart);
      } else {
        cloneCart[index].cartQuantity++;
      }
      return { ...state, cart: cloneCart };
    }
    case "REMOVE_CART": {
      let itemRemove = action.payload.id;
      let newCart = state.cart.filter((item) => item.id !== itemRemove);
      return { ...state, cart: newCart };
    }
    case "UPDATE_CART_QUANTITY": {
      let { id, quantity } = action.payload;
      let updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, cartQuantity: item.cartQuantity + quantity };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};
