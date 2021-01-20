import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './login-types';
import { baseAPIUrl } from '../../config';
import { axios } from 'axios';
export const login = () => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios.post(`${baseAPIUrl}/authentication/login`);
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = (data) => {
  return {
    type: LOGIN_FAILURE,
    payload: data,
  };
};
