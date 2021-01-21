import {
  ADD_CART_ITEMS_REQUEST,
  ADD_CART_ITEMS_SUCCESS,
  ADD_CART_ITEMS_FAILURE,
  FETCH_CART_ITEMS_REQUEST,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_FAILURE,
} from './cart-types';
import axios from 'axios';
import Swal from 'sweetalert2';
import { baseAPIUrl } from '../../config';
import { toast } from 'react-toastify';
export const addCart = (params) => {
  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      'jwtToken'
    )}`;
    dispatch(addCartRequest());
    axios
      .post(`${baseAPIUrl}/cart/add-cart`, params)
      .then((response) => {
        dispatch(addCartSuccess(response.data));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have successfully added to cart',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch(addCartFailure(error));
      });
  };
};

export const addCartRequest = () => {
  return {
    type: ADD_CART_ITEMS_REQUEST,
  };
};

export const addCartSuccess = (data) => {
  return {
    type: ADD_CART_ITEMS_SUCCESS,
    payload: data,
  };
};

export const addCartFailure = (data) => {
  return {
    type: ADD_CART_ITEMS_FAILURE,
    payload: data,
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      'jwtToken'
    )}`;
    dispatch(fetchCartRequest());
    axios
      .get(`${baseAPIUrl}/cart/my-cart`)
      .then((response) => {
        dispatch(fetchCartSuccess(response.data));
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch(fetchCartFailure(error));
      });
  };
};

export const fetchCartRequest = () => {
  return {
    type: FETCH_CART_ITEMS_REQUEST,
  };
};

export const fetchCartSuccess = (data) => {
  return {
    type: FETCH_CART_ITEMS_SUCCESS,
    payload: data,
  };
};

export const fetchCartFailure = (data) => {
  return {
    type: FETCH_CART_ITEMS_FAILURE,
    payload: data,
  };
};
