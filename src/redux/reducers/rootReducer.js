import { combineReducers } from 'redux';
import productList from '../reducers/ProductList/ProductList';
import MyCart from './AddToCart/AddToCart';
import Filters from './Filters/Filters';

const rootReducer = combineReducers({
    productList,
    MyCart,
    Filters
});

export default rootReducer;