import * as actionTypes from './cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `http://localhost:5000/rooms/${id}`
  );

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: data._id,
      img: data.img,
      name: data.name,
      price: data.price,
      checkInDate: data.checkInDate,
      checkOutDate: data.checkOutDate,
      adults: data.adults,
      children: data.children,
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
