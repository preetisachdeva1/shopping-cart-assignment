import { fetchProductsBegin, fetchProductsFailure } from "./categoryAction";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
import store from "../store";

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("http://localhost:3000/products")
      .then(handleErrors)
      .then(res => res.json())
      .then(result => {
        dispatch(fetchProductsSuccess(result));
        return result;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
} 
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: { products }
});
export function filterProductsByCategory(categoryID) {
  if (store.getState().products.categoryId == categoryID) {
    categoryID = "";
  }
  return dispatch => {
    dispatch({ type: FILTER_PRODUCTS, payload: categoryID });
  };
}
