import fetchProductsList from '../../../services/productsList'
const FETCH_PRODUCTS_LIST_IN_PROGRESS = "FETCH_IN_PROGRESS";
const FETCH_PRODUCTS_LIST_SUCCESSFUL = "FETCH_PRODUCTS_LIST_SUCCESSFUL";
const FETCH_PRODUCTS_LIST_FAILED = "FETCH_PRODUCTS_LIST_IN_FAILED";

const initialState = {
  status: FETCH_PRODUCTS_LIST_IN_PROGRESS,
  products: []
};

function updateProductsList(data) {
  return {
    type: FETCH_PRODUCTS_LIST_SUCCESSFUL,
    data
  };
}

export default function productList(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_LIST_SUCCESSFUL:
      return {
        ...state,
        status: FETCH_PRODUCTS_LIST_SUCCESSFUL,
        products: [...action.data.arrayOfProducts]
      };
    case FETCH_PRODUCTS_LIST_FAILED:
        return{
            ...state,
            status: FETCH_PRODUCTS_LIST_FAILED
        }
    default:
      return state;
  }
}

export function productListThunk() {
    return (dispatch) => {
      return fetchProductsList()
        .then(response => response.data)
        .then((data) => {
          dispatch(updateProductsList(data));
        })
        .catch(() => dispatch({type: FETCH_PRODUCTS_LIST_FAILED }));
    };
  }