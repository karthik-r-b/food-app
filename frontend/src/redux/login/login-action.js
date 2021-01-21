import axios from 'axios';
import { login } from '../../util/auth';
import { toast } from 'react-toastify';
import { baseAPIUrl } from '../../config';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from './login-types';
const userData = require('../../assets/mock-response/auth-user.json');

export const loginWithGoogle = (token) => {
  return (dispatch) => {
    let data = { tokenId: token };
    dispatch(loginRequest());
    axios
      .post(baseAPIUrl + '/authentication/google-login', data)
      .then((response) => {
        const user = userData;
        if (user.token) {
          login(response.data.token);
        }
        dispatch(loginSuccess(true));
      })
      .catch((error) => {
        toast.error('Login Failed. Something went wrong');
        dispatch(loginFailure(error));
      });
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (isLogin) => {
  return {
    type: LOGIN_SUCCESS,
    payload: isLogin,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
