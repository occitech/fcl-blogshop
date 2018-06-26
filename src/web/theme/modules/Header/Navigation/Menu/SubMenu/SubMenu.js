import React from "react";
import ProductInCorrespondantCategories from "./ProductInCorrespondantCategories.json";
import Link from "theme/ui/atoms/Typography/Link";
import "./SubMenu.scss";

const navButtonClassNames = navButtonName => {
  return `sub-menu__navButton ${navButtonName}`;
};

const SubMenu = ({ category }) => {
  return (
    <div className="sub-menu">
      {ProductInCorrespondantCategories.filter(product => {
        return product.categoryId === category.id;
      }).map(product => (
        <Link to={`/product/${product.sku}`} key={`product-${product.name}`}>
          <div className={navButtonClassNames(category.name)}>
            {product.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
