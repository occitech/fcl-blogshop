import React from "react";
import ProductInCorrespondantCategories from "./ProductInCorrespondantCategories.json";
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
        <div
          key={`product-${product.name}`}
          className={navButtonClassNames(category.name)}
        >
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
