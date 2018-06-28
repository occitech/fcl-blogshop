import React from "react";
import ProductItem from "../ProductItem";
import MediaGrid from "theme/ui/organisms/MediaGrid";
import GridCatchPhrase from "theme/modules/GridCatchPhrase";

// We are using a specific JSX operator called the "spread" operator that will pass
// all properties of the given "product" object as props to the ProductItem component
// See : https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
const ProductList = ({ products }) => {
  return (
    <MediaGrid>
      <GridCatchPhrase content="<span>Don’t just buy</span><span class='bold'> a product,</span><span> buy</span><span class='primary'> a complete experience!</span>" />
      {products.map((product, index) => (
        <ProductItem key={product.sku} {...product} index={index} />
      ))}
    </MediaGrid>
  );
};

export default ProductList;
