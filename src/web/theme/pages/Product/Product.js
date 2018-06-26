import React, { Fragment } from "react";
import Redirect from "react-router/Redirect";
import withRouter from "react-router/withRouter";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

import EnhanceProduct from "./EnhanceProduct";
import ProductQuery from "./ProductQuery.gql";
import PageWithMedia from "theme/ui/templates/PageWithMedia";
import ProductSynthesis from "theme/modules/ProductSynthesis";
import HeroImage from "theme/modules/HeroImage";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import { H2 } from "theme/ui/atoms/Typography/Heading";
import Icon from "theme/ui/atoms/Icon";
import Tile from "theme/modules/Tile";
import RelatedProducts from "theme/pages/RelatedProduct";

import "./Product.scss";

const Product = ({ loading, product }) => {
  if (loading) {
    return <LoadingArea>Loading…</LoadingArea>;
  } else if (!product) {
    return <Redirect to="/not-found" />;
  }

  return (
    <div>
      <PageWithMedia
        media={
          <HeroImage
            path={createMediaUrlFromPath(product.imageUrl)}
            alt={product.name}
          />
        }
      >
        <ProductSynthesis product={product} />
      </PageWithMedia>
      {product.related.length > 0 && (
        <Fragment>
          <div className="separator" />
          <Tile
            name={"related-products"}
            title={
              <Fragment>
                <Icon icon="radiance-up" />
                <H2>You might also like these reviews</H2>
              </Fragment>
            }
            children={
              <Fragment>
                <RelatedProducts
                  products={product.related && product.related.slice(0, 2)}
                />
              </Fragment>
            }
            style={"white"}
            contentStyle={"card"}
          />
        </Fragment>
      )}
    </div>
  );
};

export default compose(
  withRouter,
  withProps(props => ({ sku: props.sku || props.match.params.sku })),
  EnhanceProduct(ProductQuery)
)(Product);
