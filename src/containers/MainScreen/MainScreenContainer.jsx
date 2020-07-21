import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { productListThunk } from "../../redux/reducers/ProductList/ProductList";
import ProductsDisplay from "../../components/ProductDisplay/ProductDisplay";
import {
  updateCart,
  updateCartItemExisted
} from "../../redux/reducers/AddToCart/AddToCart";
import FilterComponent from "../../components/FilterComponent/FilterComponent";

function mapStateToProps(state) {
  return {
    products: state.productList.products,
    loading: !(state.productList.status === "FETCH_PRODUCTS_LIST_SUCCESSFUL"),
    MyCart: state.MyCart,
    Filters: state.Filters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(productListThunk())
  };
}

function MainScreenContainer(props) {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const dispatch = useDispatch();
  const addToCart = (product, itemId) => {
    const { MyCart } = props;
    const isItemFoundInCart =
      Object.keys(MyCart).length > 0 && MyCart[itemId] !== undefined;
    const itemExisting = isItemFoundInCart && MyCart[itemId];
    if (isItemFoundInCart) {
      dispatch(updateCartItemExisted(itemExisting));
    } else {
      dispatch(updateCart(product, 1));
    }
  };

  const returnFilteredProducts = () => {
     const {products,Filters} = props;
     if(Filters.length > 0){
        const results = []
        for(let i = 0; i< Filters.length; i++) {
            results.push(...products.filter(j => j.type === Filters[i]))
        }
        return results;
     }
     return products
  }
  return (
    <div>
      <FilterComponent products={props.products} loading={props.loading} filters={props.Filters}/>
      <ProductsDisplay
        products={returnFilteredProducts()}
        loading={props.loading}
        addToCart={addToCart}
      />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreenContainer);
