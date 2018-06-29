import React from "react";
import ProductList from "theme/modules/ProductList";
import "./RelatedProducts.scss";

const RelatedProducts = ({ products }) => {
  return <ProductList products={products} />;
};

RelatedProducts.propTypes = {};

export default RelatedProducts;
