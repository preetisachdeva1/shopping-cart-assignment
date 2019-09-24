import { TOGGLE_CART_ITEM, ADD_BUY_ITEM, CART_TOTAL_ITEM,
  CART_TOTAL_PRICE} from '../actions/buyItemAction';

 const InitialState = {
  product: [],
  loading: false,
  error: null,
  toogleModal: false,
  totalItem: 0,
  totalPrice: 0
};

export default function cartItemReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_BUY_ITEM:
        return {
        ...state,
        loading: false,
        product: action.payload.myCartItems
      };
    
    case TOGGLE_CART_ITEM:
      return {
        ...state,
        toogleModal: !state.toogleModal
      }
    case CART_TOTAL_ITEM:
        return {
          ...state,
          totalItem: action.payload
        }
    case CART_TOTAL_PRICE:
        return {
          ...state,
          totalPrice: action.payload
        }
    default:
      return state;
  }
}
