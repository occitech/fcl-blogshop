import React from "react";
import PropTypes from "prop-types";
import "./Description.scss";

const Description = ({ children }) => {
  return (
    children && (
      <div
        className="product-description"
        dangerouslySetInnerHTML={{
          __html: children.replace(
            /{{media url="wysiwyg\//g,
            "https://demo-m2.front-commerce.com/media/wysiwyg/"
          )
        }}
      />
    )
  );
};

Description.propTypes = {
  children: PropTypes.node.isRequired
};

export default Description;
