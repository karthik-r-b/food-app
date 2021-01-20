const initialState = {
  loading: true,
  login: false,
  error: '',
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        loading: false,
        login: action.payload,
        error: '',
      };
    case 'LOGIN_FAILURE':
      return {
        loading: false,
        login: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
