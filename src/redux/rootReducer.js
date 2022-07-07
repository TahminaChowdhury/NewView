import { combineReducers } from 'redux';
import cartReducer from './Cart/cartReducer';
import { roomReducer, roomDetailsReducer } from './Rooms/roomReducers';
import {
  postBookingsReducer,
  getBookingsReducer,
} from './Bookings/bookingReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  room: roomReducer,
  roomDetails: roomDetailsReducer,
  postBookings: postBookingsReducer,
  bookings: getBookingsReducer,
});

export default rootReducer;
