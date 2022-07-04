import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [thunk];

const cartFromLOcalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const inittialState ={
  cart:{
    cartItems: cartFromLOcalStorage
  }
}

const store = createStore(
  rootReducer,
  inittialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
