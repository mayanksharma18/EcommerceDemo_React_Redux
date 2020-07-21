const UPDATE_CART = "UPDATE_CART";
const UPDATE_CART_FOR_ALREADY_EXISTED_ITEM =
  "UPDATE_CART_FOR_ALREADY_EXISTED_ITEM";
const DECREASE_COUNT_OF_PRODUCTS_IN_CART = "DECREASE_COUNT_OF_PRODUCTS_IN_CART";
const CLEAR_CART = 'CLEAR_CART';
const initialState = {};

export function updateCart(product, count) {
  return {
    type: UPDATE_CART,
    product,
    count
  };
}

export function updateCartItemExisted(itemExisting) {
  return {
    type: UPDATE_CART_FOR_ALREADY_EXISTED_ITEM,
    itemExisting
  };
}

export function decreaseCountOfItemExistingInCart(itemExisting) {
  return {
    type: DECREASE_COUNT_OF_PRODUCTS_IN_CART,
    itemExisting
  };
}

export function clearCart(){
  return{
    type: CLEAR_CART,
  }
}
export default function addToCart(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        [action.product.productId]: { ...action.product, count: action.count }
      };
    case UPDATE_CART_FOR_ALREADY_EXISTED_ITEM:
      return {
        ...state,
        [action.itemExisting.productId]: {
          ...action.itemExisting,
          count: action.itemExisting.count + 1
        }
      };
    case DECREASE_COUNT_OF_PRODUCTS_IN_CART:
      return {
        ...state,
        [action.itemExisting.productId]: {
          ...action.itemExisting,
          count: action.itemExisting.count === 1  ? action.itemExisting.count : action.itemExisting.count - 1
        }
      };
    case CLEAR_CART:
      return {}  

    default:
      return state;
  }
}
