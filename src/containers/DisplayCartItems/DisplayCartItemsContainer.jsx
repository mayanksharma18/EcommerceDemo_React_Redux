import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import ProductInCart from "../../reusable/ProductsInCart/ProductsInCart";
import { updateCartItemExisted,decreaseCountOfItemExistingInCart,clearCart } from '../../redux/reducers/AddToCart/AddToCart'
import './DisplayCartItemsContainer.scss';
import CheckOutButton from "../../components/CheckOutButton/CheckOutButton";

function mapStateToProps(state) {
  return {
    items: state.MyCart
  };
}

function returnTotalAmount(allProducts){
    return(
      <div className="payAndCheckout">
        <p>
          Total Pay:
          {Object.entries(allProducts).reduce(
            (acc, currentItem) => currentItem[1].price* currentItem[1].count + acc,
            0
          )}$
        </p>
        <CheckOutButton/>
        </div>
    )
}

function DisplayCartItems(props) {
  const dispatch = useDispatch()
  const increaseCount = (itemId) => {
    const { items } = props;
    const isItemFoundInCart = Object.keys(items).length >0 && items[itemId] !== undefined;
    const itemExisting = isItemFoundInCart && items[itemId];
    if(isItemFoundInCart){
        dispatch(updateCartItemExisted(itemExisting))
    }
  }
  const decreaseCount = (itemId) => {
    const { items } = props;
    const isItemFoundInCart = Object.keys(items).length >0 && items[itemId] !== undefined;
    const itemExisting = isItemFoundInCart && items[itemId];
    if(isItemFoundInCart){
        dispatch(decreaseCountOfItemExistingInCart(itemExisting))
    }
  }
  if (Object.entries(props.items).length === 0) {
    return(
    <Container fixed>
      <h1>No Products Selected</h1>
    </Container>)
  }
  return (
    <Container fixed>
      <div className="totalProducts">
        <h1>Your Selected Products :</h1>
        {returnTotalAmount(props.items)}
        </div>
      <div className="clearCart" onClick={() => dispatch(clearCart())}>Clear Cart</div>
      {Object.entries(props.items).map(i => (
        <ProductInCart elem={i[1]} key={i[0]}  increaseCount={increaseCount} decreaseCount={decreaseCount}/>
      ))}
      {returnTotalAmount(props.items)}
    </Container>
  );
}

export default connect(mapStateToProps)(DisplayCartItems);
