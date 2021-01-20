const initialState = {
  loading: true,
  data: {},
  error: '',
};
const menuItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_ITEMS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'MENU_ITEMS_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'MENU_ITEMS_FAILURE':
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default menuItemsReducer;
