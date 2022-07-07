import * as actionTypes from './bookingConstants';

// Post bookings
const initialPostState = {
  isResponse: false,
};

export const postBookingsReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOKING:
      return {
        ...state,
        isResponse: action.payload,
      };
    default:
      return state;
  }
};

// get bookings
const getBookingsInitialState = {
  loading: true,
  bookings: [],
  error: '',
};

export const getBookingsReducer = (state = getBookingsInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };

    case actionTypes.GET_BOOKINGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
