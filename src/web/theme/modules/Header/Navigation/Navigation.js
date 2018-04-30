import React from "react";
import { CartModal } from "../../Cart";
import Button from "theme/ui/atoms/Button";
import IconWithLabel from "theme/ui/molecules/IconWithLabel";
import Menu from "./Menu";
import "./Navigation.scss";

const Navigation = ({ category }) => {
  return (
    <nav className="nav">
      <Menu categories={category.children} />
      <CartModal>
        {openCart => (
          <Button type="invisible" onClick={openCart}>
            <IconWithLabel icon="cart">Cart</IconWithLabel>
          </Button>
        )}
      </CartModal>
    </nav>
  );
};

export default Navigation;
