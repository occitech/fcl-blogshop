import React, { Fragment } from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import ProductList from "theme/modules/ProductList";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import Page from "theme/ui/templates/Page";
import AboutReviewer from "theme/pages/Reinsurance/AboutReviewer";
import TransitionOnScroll from "theme/ui/molecules/TransitionOnScroll";

const Home = ({ store, category, loading }) => (
  <Page>
    {loading ? (
      <LoadingArea>Loading products…</LoadingArea>
    ) : (
      <Fragment>
        <ProductList products={category.layer.products} />
        <TransitionOnScroll type="fade-in-left" duration={0.5} translateX={20}>
          <AboutReviewer />
        </TransitionOnScroll>
      </Fragment>
    )}
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
