import React from "react";
import Observer from "@researchgate/react-intersection-observer";
import { compose, withState, withHandlers, lifecycle } from "recompose";
import "./TransitionOnScroll.scss";

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

const TransitionOnScroll = ({
  children,
  handleChange,
  isVisible,
  type,
  delay = 0,
  duration = 1,
  animationState,
  translateX,
  once = false
}) => {
  const transitionClass = `transition ${
    isVisible && type
      ? "transition--" +
        type +
        ` ${animationState ? `transition--${type}${animationState}` : ""}`
      : "transition--" + type + ` transition--${type}--enter`
  }`;

  return (
    <Observer onChange={handleChange}>
      <div
        style={{
          transitionDelay: `${delay}s`,
          transitionDuration: `${duration}s`,
          transform: `${translateX}px`
        }}
        className={transitionClass}
      >
        {children}
      </div>
    </Observer>
  );
};

export default compose(
  withState("isVisible", "setVisibility", false),
  withState("animationState", "setAnimationState", "enter"),
  withHandlers({
    handleChange: props => (event, unobserve) => {
      if (event.isIntersecting) {
        props.once && unobserve();
        props.setVisibility(true);
      } else {
        props.setVisibility(false);
      }
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      var start = null;
      const requestTick = timestamp => {
        if (start === null) start = timestamp;
        if (timestamp > start + 20) {
          this.props.setAnimationState(null);
        } else {
          requestAnimationFrame(requestTick);
        }
      };
      if (!prevProps.isVisible && this.props.isVisible) {
        this.props.setAnimationState("--enter");
        requestAnimationFrame(requestTick);
      }
    }
  })
)(TransitionOnScroll);
