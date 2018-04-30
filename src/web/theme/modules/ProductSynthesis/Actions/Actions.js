import React from "react";
import AddToCart from "theme/ui/molecules/AddToCart";
import { CartModal } from "../../Cart";
import Price from "theme/ui/atoms/Typography/Price";

const Actions = ({ product }) => {
  return (
    <div className="product-actions">
      <CartModal>
        {openCart => (
          <AddToCart sku={product.sku} onAdded={openCart}>
            Add to cart -{" "}
            <Price price={product.prices.finalPrice.priceInclTax} />
          </AddToCart>
        )}
      </CartModal>
    </div>
  );
};

export default Actions;
