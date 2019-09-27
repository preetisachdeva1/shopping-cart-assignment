export const ADD_BUY_ITEM = "ADD_BUY_ITEM";
export const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";
export const CART_TOTAL_ITEM = "CART_TOTAL_ITEM";
export const CART_TOTAL_PRICE = "CART_TOTAL_PRICE";

// Add item in cart
export const addProductAction = id => {
  return (dispatch, getState) => {
    const cartItem = getState().products.items.find(item => item.id === id);
    let myCartItems = getState().cartItem.product;
    const index = myCartItems.findIndex(i => i.product.id === cartItem.id);
    if (index !== -1) {
      myCartItems[index].quantity++;
    } else {
      myCartItems.push({ product: cartItem, quantity: 1 });
    }
    const totalItem = myCartItems.reduce(
      (total, num) => total + num.quantity,
      0
    );
    const totalPrice = myCartItems.reduce(
      (total, num) => total + num.quantity * num.product.price,
      0
    );
    dispatch({
      type: ADD_BUY_ITEM,
      payload: { myCartItems }
    });
    dispatch({
      type: CART_TOTAL_ITEM,
      payload: totalItem
    });
    dispatch({
      type: CART_TOTAL_PRICE,
      payload: totalPrice
    });
  };
};
// Remove item from cart
export const removeProductAction = id => {
  return (dispatch, getState) => {
    let myCartItems = getState().cartItem.product;
    const index = myCartItems.findIndex(item => item.product.id === id);
    if (index !== -1) {
      myCartItems[index].quantity--;
    }
    myCartItems = myCartItems.filter(product => product.quantity !== 0);
    const totalItem = myCartItems.reduce(
      (total, num) => total + num.quantity,
      0
    );
    const totalPrice = myCartItems.reduce(
      (total, num) => total + num.quantity * num.product.price,
      0
    );
    dispatch({
      type: ADD_BUY_ITEM,
      payload: { myCartItems }
    });
    dispatch({
      type: CART_TOTAL_ITEM,
      payload: totalItem
    });
    dispatch({
      type: CART_TOTAL_PRICE,
      payload: totalPrice
    });
  };
};

// Toggle cart items function
export const toggleCartItem = () => ({
  type: TOGGLE_CART_ITEM
});
// Dispatch on proceed to checkout
export const checkoutItems = () => {
  console.log("checkoutItems");
  const myCartItems = [];
  return (dispatch, getState) => {
    dispatch({
      type: ADD_BUY_ITEM,
      payload: { myCartItems }
    });
    dispatch({
      type: CART_TOTAL_ITEM,
      payload: 0
    });
    dispatch({
      type: CART_TOTAL_PRICE,
      payload: 0
    });
    dispatch(toggleCartItem())
  };
};
