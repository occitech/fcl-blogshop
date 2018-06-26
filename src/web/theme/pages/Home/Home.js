import React, { Fragment } from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import ProductList from "theme/modules/ProductList";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import Page from "theme/ui/templates/Page";
import AboutReviewer from "theme/pages/Reinsurance/AboutReviewer";

const Home = ({ store, category, loading }) => (
  <Page>
    {loading ? (
      <LoadingArea>Loading products…</LoadingArea>
    ) : (
      <Fragment>
        <ProductList products={category.layer.products} />
        <AboutReviewer />
      </Fragment>
    )}
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
