import * as actionTypes from './cartConstants';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const items = action.payload;
      const existItem = state.cartItems.find((item) => item.id === items.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === existItem.id ? items : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, items],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
      case actionTypes.CART_RESET:
        return{
          ...state,
          cartItems: []
        }
    default:
      return state;
  }
};

export default cartReducer;
