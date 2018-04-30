import React from "react";
import { H2 } from "theme/ui/atoms/Typography/Heading";
import Actions from "../Actions";
import Price from "theme/ui/atoms/Typography/Price";
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
      <div>
        <Actions product={product} />
      </div>
      <div>
        <H2>Products specifications</H2>
        <span>
          You can find here the product dimensions, weight and other usefull
          informations.
        </span>
      </div>
      <div>
        <strong>Deck dimensions:</strong>
        <span>37,5 x 11,25 inches</span>
      </div>
    </div>
  );
};

export default ProductInfo;
