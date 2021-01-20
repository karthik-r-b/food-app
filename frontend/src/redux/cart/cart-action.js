import {
  ADD_CART_ITEMS_REQUEST,
  ADD_CART_ITEMS_SUCCESS,
  ADD_CART_ITEMS_FAILURE,
} from './cart-types';
// import Swal from 'sweetalert2';
export const addCart = (params) => {
  return (dispatch) => {
    // dispatch(menuItemsRequest());
    dispatch(addCartSuccess(params));
    // axios
    //   .get(`${baseAPIUrl}/menu/items`)
    //   .then((response) => {
    //     // dispatch(menuItemsSuccess(response.data));
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'You have successfully added to cart',
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    //   })
    //   .catch((error) => {
    //     dispatch(menuItemsFailure(error));
    //   });
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
