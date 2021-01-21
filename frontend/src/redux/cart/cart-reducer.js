const initialState = {
  loading: true,
  data: {},
  error: '',
};
const addCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_ITEMS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_CART_ITEMS_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'ADD_CART_ITEMS_FAILURE':
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CART_ITEMS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_CART_ITEMS_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'FETCH_CART_ITEMS_FAILURE':
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export { addCartReducer, fetchCartReducer };
