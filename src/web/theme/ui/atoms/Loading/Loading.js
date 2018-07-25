import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <span className="loading">
      <span className="loading__bounce1 bounce1" />
      <span className="loading__bounce2 bounce2" />
      <span className="loading__bounce3" />
    </span>
  );
};

export default Loading;
