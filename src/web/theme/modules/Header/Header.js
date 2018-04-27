import React from "react";
import Navigation from "./Navigation";
import Link from "theme/ui/atoms/Typography/Link";
import Logo from "theme/ui/atoms/Logo";
import EnhanceHeader from "./EnhanceHeader";
import HeaderQuery from "./HeaderQuery.gql";
import "./Header.scss";

const Header = ({ loading, category }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="header__nav">
          {loading ? <div /> : <Navigation category={category} />}
        </div>
      </div>
    </header>
  );
};

export default EnhanceHeader(HeaderQuery)(Header);
