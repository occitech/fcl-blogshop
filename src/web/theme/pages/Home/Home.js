import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import ProductList from "theme/modules/ProductList";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import Page from "theme/ui/templates/Page";
import GridCatchPhrase from "theme/modules/GridCatchPhrase";

const Home = ({ store, category, loading }) => (
  <Page>
    {loading ? (
      <LoadingArea>Loading products…</LoadingArea>
    ) : (
      <ProductList
        catchPhrase={
          <GridCatchPhrase content="<span>Don’t just buy</span><span class='bold'> a product,</span><span> buy</span><span class='primary'> a complete experience!</span>" />
        }
        products={category.layer.products}
      />
    )}
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
