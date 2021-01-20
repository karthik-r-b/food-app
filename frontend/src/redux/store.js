import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../redux/login/login-reducer';
import menuItemsReducer from '../redux/menu-items/menu-items-reducer';
const rootReducer = combineReducers({ loginReducer, menuItemsReducer });
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
