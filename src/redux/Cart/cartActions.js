import * as actionTypes from './cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const data = await axios.get(
    `https://pacific-sea-24561.herokuapp.com/rooms/${id}`
  );

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: data._id,
      name: data.name,
      description: data.description,
      accomodation: data.accomodation,
      size: data.size,
      price: data.price,
      img: data.img,
      amenities: data.amenities,
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
