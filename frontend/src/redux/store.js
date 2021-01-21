import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../redux/login/login-reducer';
import menuItemsReducer from '../redux/menu-items/menu-items-reducer';
import { addCartReducer, fetchCartReducer } from '../redux/cart/cart-reducer';
const rootReducer = combineReducers({
  loginReducer,
  menuItemsReducer,
  addCartReducer,
  fetchCartReducer,
});
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
