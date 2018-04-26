import React from "react";
import PropTypes from "prop-types";
import Button from "theme/ui/atoms/Button";
import Icon from "theme/ui/atoms/Icon";
import { withState, withHandlers } from "recompose";
import compose from "recompose/compose";
import SubMenu from "theme/modules/Header/Navigation/Menu/SubMenu";

const Menu = ({ categories, setOpenStateMenu, isMenuOpened }) => {
  const menuClasses = `menu ${isMenuOpened ? `open` : `close`}`;
  return (
    <div className={menuClasses}>
      <div className="menu__container">
        {categories.map(category => (
          <div key={category.name} className="menu__navButton">
            <Button onClick={() => {}}>{category.name}</Button>
            <SubMenu category={category} />
          </div>
        ))}
      </div>
      <button onClick={setOpenStateMenu} className="menu__button button">
        <Icon icon={"menu"} />
      </button>
    </div>
  );
};

Menu.propTypes = {
  categories: PropTypes.array
};

export default compose(
  withState("isMenuOpened", "setOpenStateMenu", false),
  withHandlers({
    setOpenStateMenu: props => () => props.setOpenStateMenu(!props.isMenuOpened)
  })
)(Menu);
