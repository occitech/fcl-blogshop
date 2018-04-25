import React from "react";
import PropTypes from "prop-types";
import StoreDetails from "../StoreDetails";
import StoreContact from "../StoreContact";
import EnhanceFooter from "./EnhanceFooter";
import FooterQuery from "./FooterQuery.gql";
import Logo from "theme/ui/atoms/Logo";
import "./Footer.scss";

const Footer = ({ store }) => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
        <span>Don’t just buy a product, buy an experience!</span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  store: PropTypes.shape({
    owner: StoreDetails.propTypes.owner,
    phone: StoreContact.propTypes.phone
  })
};

export default EnhanceFooter(FooterQuery)(Footer);
