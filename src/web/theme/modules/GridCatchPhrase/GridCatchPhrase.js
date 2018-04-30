import React from "react";
import PropTypes from "prop-types";
import "./GridCatchPhrase.scss";

const GridCatchPhrase = ({ content }) => {
  return (
    <div className="media-container">
      <div
        className="grid-catch-phrase media"
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    </div>
  );
};

GridCatchPhrase.propTypes = { content: PropTypes.string };

export default GridCatchPhrase;
