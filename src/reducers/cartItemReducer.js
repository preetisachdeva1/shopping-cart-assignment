const InitialState = {
  product: [],
  loading: false,
  error: null
};

export default function cartItemReducer(state = InitialState, action) {
  switch (action.type) {
    case "ADD_BUY_ITEM":
      return {
        ...state,
        loading: false,
        product: [...state.product, action.payload.product]
      };
    default:
      return state;
  }
}
