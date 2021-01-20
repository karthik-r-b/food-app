import {
  MENU_ITEMS_REQUEST,
  MENU_ITEMS_SUCCESS,
  MENU_ITEMS_FAILURE,
} from './menu-items-types';
// import { baseAPIUrl } from '../../config';
// import axios from 'axios';
import menuItems from '../../assets/mock-response/menu-items.json';
export const menuItem = () => {
  return (dispatch) => {
    // dispatch(menuItemsRequest());
    dispatch(menuItemsSuccess(menuItems));
    // axios
    //   .get(`${baseAPIUrl}/menu/items`)
    //   .then((response) => {
    //     // dispatch(menuItemsSuccess(response.data));
    //   })
    //   .catch((error) => {
    //     dispatch(menuItemsFailure(error));
    //   });
  };
};

export const menuItemsRequest = () => {
  return {
    type: MENU_ITEMS_REQUEST,
  };
};

export const menuItemsSuccess = (data) => {
  return {
    type: MENU_ITEMS_SUCCESS,
    payload: data,
  };
};

export const menuItemsFailure = (data) => {
  return {
    type: MENU_ITEMS_FAILURE,
    payload: data,
  };
};
