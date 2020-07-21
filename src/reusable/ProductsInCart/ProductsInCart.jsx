import React from "react";
import PropTypes from "prop-types";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import "./ProductsInCart.scss";

export default function ProductInCart(props) {
  const { productId,imgUrl, price, name, count } = props.elem;

  return (
    <div className="cartContainer">
      <div className="flexContainer">
        <img
          src={imgUrl}
          alt={name}
          width="150px"
          height="150px"
        />
        <div className="itemDetail">
          <span className="title">{name}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.
          </p>
          <p>
            <b>{`Price: ${price}$`}</b>
          </p>
          <p>
            <b>Quantity: {count}</b>
          </p>
          <div className="controls">
            <span onClick={() => props.increaseCount(productId)}>
              <AddCircleOutlineOutlinedIcon fontSize="large" />
            </span>
            <span onClick={() => props.decreaseCount(productId)}>
              <RemoveCircleOutlineOutlinedIcon
                className="decreaseQuantity"
                fontSize="large"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
ProductInCart.propTypes = {
  elem: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })
};
ProductInCart.defaultProps = {
  elem: {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    price: 0,
    name: "XYZ",
    count: 0,
  }
};
