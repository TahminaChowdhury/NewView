import * as actionTypes from './roomConstants';

// Room reducer
const roomInitialState = {
  loading: true,
  rooms: [],
  error: '',
};

export const roomReducer = (state = roomInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ROOMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload,
        error: '',
      };
    case actionTypes.GET_ROOMS_FAIL:
      return {
        ...state,
        loading: false,
        rooms: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Room details reducer
const roomDetailsInitialState = {
  loading: true,
  room: {},
  error: '',
};
export const roomDetailsReducer = (state = roomDetailsInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ROOM_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_ROOM_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        room: action.payload,
      };

    case actionTypes.GET_ROOM_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        room: {},
        error: action.payload,
      };
    case actionTypes.GET_ROOM_DETAILS_RESET:
      return {
        ...state,
        room: {},
      };

    default:
      return state;
  }
};
