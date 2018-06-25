import React from "react";
import { H2 } from "theme/ui/atoms/Typography/Heading";
import Button from "theme/ui/atoms/Button";
import Link from "theme/ui/atoms/Typography/Link";
import Icon from "theme/ui/atoms/Icon";
import "./AboutReviewer.scss";

const AboutReviewer = () => {
  return (
    <div className="about-reviewer">
      <div className="about-reviewer__title">
        <Icon icon="radiance-up" />
        <H2>You are important to us!</H2>
        <Icon icon="radiance-down" />
      </div>
      <div className="about-reviewer__content">
        <p>
          All our products are tested by trusted people like<strong>
            &nbsp;you.&nbsp;
          </strong>Only products with good reviews will be displayed on the
          site.
        </p>
        <p>
          Start receiving products at home, test them, and send us your review.
        </p>
      </div>
      <div className="about-reviewer__action">
        <Button to="/">button</Button>
      </div>
    </div>
  );
};

AboutReviewer.proptype = {};

export default AboutReviewer;
