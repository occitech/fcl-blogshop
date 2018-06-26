import React from "react";
import PropTypes from "prop-types";
import { H2 } from "theme/ui/atoms/Typography/Heading";
import Actions from "../Actions";
import Price from "theme/ui/atoms/Typography/Price";
import infos from "./ProductInfo.json";
import "./ProductInfo.scss";

const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <div className="product-info__title">
        <H2>{product.name}</H2>
      </div>
      <div className="product-info__price">
        <Price price={product.prices.finalPrice.priceInclTax} />
      </div>
      <div className="product-info__action">
        <Actions product={product} />
      </div>
      <div className="product-info__specification">
        <H2>Products specifications</H2>
        <span className="product-info__specification__description">
          You can find here the product dimensions, weight and other useful
          information.
        </span>
        {infos.map(info => (
          <div
            key={info.attribute}
            className="product-info__specification__attribute"
          >
            <strong>{info.attribute}</strong>
            <span> : {info.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    prices: PropTypes.object.isRequired
  })
};

export default ProductInfo;
