import { combineReducers } from 'redux';
import cartReducer from './Cart/cartReducer';
import { roomReducer, roomDetailsReducer } from './Rooms/roomReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  room: roomReducer,
  roomDetails: roomDetailsReducer,
});

export default rootReducer;
