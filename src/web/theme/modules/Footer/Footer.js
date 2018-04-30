import React from "react";
import PropTypes from "prop-types";
import StoreDetails from "../StoreDetails";
import StoreContact from "../StoreContact";
import EnhanceFooter from "./EnhanceFooter";
import FooterQuery from "./FooterQuery.gql";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import Logo from "theme/ui/atoms/Logo";
import "./Footer.scss";
import Mountain from "./Mountains.png";

const Footer = ({ loading, category }) => {
  return (
    <footer className="footer">
      <img className="mountain" src={Mountain} alt="mountain" />
      <div className="footer__logo">
        <Logo />
        {loading ? (
          <LoadingArea>Loading...</LoadingArea>
        ) : (
          <span
            dangerouslySetInnerHTML={{
              __html: category.description
            }}
          />
        )}
      </div>
      <div className="footer__categories">
        {loading ? (
          <LoadingArea>Loading...</LoadingArea>
        ) : (
          category.children.map(category => (
            <div className="footer__categories__title" key={category.id}>
              {category.name}
            </div>
          ))
        )}
      </div>
      <div className="footer__copyright">
        Copyright {new Date().getFullYear()} - Blog & Shop - All right reserved
        - Developed by Blog & Shop
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
