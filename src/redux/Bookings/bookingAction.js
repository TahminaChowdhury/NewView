import axios from 'axios';
import * as actionTypes from './bookingConstants';

// Post bookings action
export const postBooking = (request) => async (dispatch) => {
  dispatch({
    type: actionTypes.ADD_BOOKING,
    payload: false,
  });

  const { data } = await axios.post(
    'https://the-new-view.up.railway.app/bookings',
    request
  );
  dispatch({
    type: actionTypes.ADD_BOOKING,
    payload: true,
  });
};

// Get bookings action
export const getBookings = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_BOOKINGS_REQUEST,
    });

    const { data } = await axios.get(
      'https://the-new-view.up.railway.app/bookings'
    );
    dispatch({
      type: actionTypes.GET_BOOKINGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_BOOKINGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

