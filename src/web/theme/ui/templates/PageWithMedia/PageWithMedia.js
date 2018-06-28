import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { IconButton } from "theme/ui/atoms/Icon";
import TransitionOnScroll from "theme/ui/molecules/TransitionOnScroll";
import "./PageWithMedia.scss";

const PageWithMedia = ({ media, children, history }) => {
  return (
    <div className="page-with-media">
      <TransitionOnScroll type="fade-in-top" delay={0} duration={0.5} once>
        <div className="page-with-media__media">
          {history.length > 0 && (
            <div className="page-with-media__icon">
              <IconButton icon="arrow-left" onClick={history.goBack} />
            </div>
          )}
          {media}
        </div>
      </TransitionOnScroll>
      <TransitionOnScroll type="fade-in-top" delay={0.3} duration={0.5}>
        <div className="page-with-media__content">{children}</div>
      </TransitionOnScroll>
    </div>
  );
};

PageWithMedia.propTypes = {
  media: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
    goBack: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(PageWithMedia);
