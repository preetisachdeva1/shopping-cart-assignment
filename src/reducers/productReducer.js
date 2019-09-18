import { FETCH_PRODUCT_SUCCESS, FILTER_PRODUCTS } from '../actions/productAction';

const initialState = {
  items: [],
  loading: false,
  error: null,
  categoryId: ''
};
export default function productReducer(state = initialState, action) {
  //debugger;
  //console.log('aaa', action.payload);
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products
      }
    case FILTER_PRODUCTS:
       return {
         ...state,
         categoryId: action.payload
       }
    default:
        return state;
  }
}
