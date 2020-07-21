import React from "react";
import ProductCard from "../../reusable/ProductCard/ProductCard";

const ProductsDisplay = ({ products, loading,addToCart }) => {
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading Products...</h1>;
  }
  return (
    <div
      style={{
        marginLeft: "20%",
        maxWidth: "1280px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flexFlow: "wrap"
      }}
    >
      {products.map((elem) => (
        <ProductCard
          key={elem.productId}
          elem={elem}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductsDisplay;
