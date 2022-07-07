import * as actionType from './roomConstants';
import axios from 'axios';

export const getRooms = () => async (dispatch) => {
  try {
    dispatch({
      type: actionType.GET_ROOMS_REQUEST,
    });
    const {data} = await axios.get(
      'https://secret-tor-33279.herokuapp.com/rooms'
    );

    dispatch({
      type: actionType.GET_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_ROOMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getRoomDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.GET_ROOM_DETAILS_REQUEST,
    });
    const {data} = await axios.get(
      `https://secret-tor-33279.herokuapp.com/rooms/${id}`
    );

    dispatch({
      type: actionType.GET_ROOM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_ROOM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const removeRoomDeatils = (id) => (dispatch) => {
    dispatch({
        type: actionType.GET_ROOM_DETAILS_RESET
    })
}