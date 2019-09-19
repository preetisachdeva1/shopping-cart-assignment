export const ADD_BUY_ITEM = "ADD_BUY_ITEM";

export const addProductAction = (product) => ({
    type: ADD_BUY_ITEM,
    payload: { product }
})

export  function addProduct(product)  {
    return dispatch => {
        dispatch(addProductAction(product));
      };
}