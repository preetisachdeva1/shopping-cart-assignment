export const FETCH_CATEGORY_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export function fetchCategory() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("http://localhost:3000/categories")
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

export const fetchProductsBegin = () => ({
    type: FETCH_CATEGORY_BEGIN
  });
  

export  const fetchProductsSuccess = (products) => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload : { products }
});

export  const fetchProductsFailure = (error) => ({
    type: FETCH_CATEGORY_FAILURE,
    payload : { error  }
})