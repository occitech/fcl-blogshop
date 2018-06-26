import React from "react";
import PropTypes from "prop-types";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import Description from "./Description";
import ProductInfo from "./ProductInfo";
import "./ProductSynthesis.scss";

const ProductSynthesis = ({ product }) => (
  <div className="product-view">
    <div className="product-view__title">
      <H1>{product.name}</H1>
    </div>
    <div className="product-view__content">
      {product.description && <Description>{product.description}</Description>}
      <ProductInfo product={product} />
    </div>
  </div>
);

ProductSynthesis.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.object.isRequired,
    description: PropTypes.string
  })
};

export default ProductSynthesis;
