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
  console.log(Mountain);
  return (
    <footer className="footer">
      <img className="mountain" src={Mountain} alt="mountain" />
      <div className="footer__logo">
        <Logo />
        {loading ? (
          <LoadingArea>Loading main category…</LoadingArea>
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
          <LoadingArea>Loading subCategories</LoadingArea>
        ) : (
          category.children.map(category => (
            <div className="category-list-title" key={category.id}>
              {category.name}
            </div>
          ))
        )}
      </div>
      <div className="footer__copyright">
        Copyright 2018 - Blog & Shop - All right reserved - Developped by Blog &
        Shop
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
