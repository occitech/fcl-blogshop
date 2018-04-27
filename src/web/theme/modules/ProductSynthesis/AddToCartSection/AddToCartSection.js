import React from "react";
import { H2 } from "theme/ui/atoms/Typography/Heading";
import Actions from "../Actions";
import Price from "theme/ui/atoms/Typography/Price";
import "./AddToCartSection.scss";

const AddToCartSection = ({ product }) => {
  return (
    <div className="add-to-cart-section">
      <div className="add-to-cart-section__title">
        <H2>{product.name}</H2>
      </div>
      <div className="add-to-cart-section__price">
        <Price price={product.prices.finalPrice.priceInclTax} />
      </div>
      <div>
        <Actions product={product} />
      </div>
    </div>
  );
};

export default AddToCartSection;
