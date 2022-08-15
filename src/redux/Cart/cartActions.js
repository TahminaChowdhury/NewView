import * as actionTypes from './cartConstants';
import axios from 'axios';

export const addToCart =
  (id, qty, bookingInfo) => async (dispatch, getState) => {
    const { data } = await axios.get(
      `https://stark-island-71268.herokuapp.com/rooms/${id}`
    );

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        id: data._id,
        img: data.img,
        name: data.name,
        price: data.price,
        checkInDate: bookingInfo.checkInDate,
        checkOutDate: bookingInfo.checkOutDate,
        adults: bookingInfo.adults,
        children: bookingInfo.children,
        availableRoom: data.availableRoom,
        qty,
      },
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  };

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const resetCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.CART_RESET,
  });
  localStorage.clear();
};
