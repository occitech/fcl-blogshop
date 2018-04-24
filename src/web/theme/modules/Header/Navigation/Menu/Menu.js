import React from "react";
import PropTypes from "prop-types";
import Button from "theme/ui/atoms/Button";
import Icon from "theme/ui/atoms/Icon";
import { withState, withHandlers } from "recompose";
import compose from "recompose/compose";

const Menu = ({
  setNavigationStep,
  navigationSteps,
  setOpenStateMenu,
  isMenuOpened
}) => {
  const menuClasses = `menu ${isMenuOpened ? `open` : `close`}`;
  return (
    console.log(isMenuOpened) || (
      <div className={menuClasses}>
        <div className="menu__container">
          {navigationSteps.map(
            step =>
              step.selected ? (
                <div key={step.name} className="menu__navButton selected">
                  <Button
                    onClick={() => {
                      setNavigationStep(step);
                    }}
                  >
                    {step.name}
                  </Button>
                </div>
              ) : (
                <div key={step.name} className="menu__navButton">
                  <Button
                    onClick={() => {
                      setNavigationStep(step);
                    }}
                  >
                    {step.name}
                  </Button>
                </div>
              )
          )}
        </div>
        <button onClick={setOpenStateMenu} className="menu__button button">
          <Icon icon={"menu"} />
        </button>
      </div>
    )
  );
};

Menu.propTypes = {
  navigationSteps: PropTypes.array,
  setNavigationStep: PropTypes.func
  // Don't forget to setup your PropTypes
  // here since this component will be heavily
  // used through your application
};

export default compose(
  withState("isMenuOpened", "setOpenStateMenu", false),
  withHandlers({
    setOpenStateMenu: props => () => props.setOpenStateMenu(!props.isMenuOpened)
  })
)(Menu);
