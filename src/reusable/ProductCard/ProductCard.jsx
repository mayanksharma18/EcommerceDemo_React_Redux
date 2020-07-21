import React from "react";
import PropTypes from "prop-types";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./ProductCard.scss";

export default function ProductCard(props) {
  const { imgUrl, price, name } = props.elem;

  return (
    <div className="card">
      <div className="card-image">
        <img src={imgUrl} alt={name} width="250px" height="250px" />
        <div className="card-title">{name}</div>
        <div
          className="btn-floating halfway-fab "
          onClick={() => props.addToCart(props.elem, props.elem.productId)}
        >
          <div className="addToCart"> Add to Cart</div>
          <AddCircleOutlineIcon color="inherit" fontSize="large" />
        </div>
      </div>
      <div className="card-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.
        </p>
        <p>
          <b>{`Price: ${price}$`}</b>
        </p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  elem: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};
ProductCard.defaultProps = {
  elem: {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0pagina",
    price: 0,
    name: "XYZ"
  }
};
