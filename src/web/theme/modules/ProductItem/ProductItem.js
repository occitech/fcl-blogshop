import React, { Fragment } from "react";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import Link from "theme/ui/atoms/Typography/Link";
import Media from "theme/ui/organisms/Media";
import Button from "theme/ui/atoms/Button";
import TransitionOnScroll from "theme/ui/molecules/TransitionOnScroll";

const ProductItem = ({ name, prices, sku, imageUrl, index }) => {
  return (
    <div className="media-container">
      <TransitionOnScroll
        type="fade-in-left"
        delay={index / 10}
        duration={0.5}
        translateX={20}
      >
        <Media
          to={`product/${sku}`}
          media={<img src={createMediaUrlFromPath(imageUrl)} alt={name} />}
          renderDetails={() => (
            <Fragment>
              <Link to={`/product/${sku}`} type="reversed">
                <div className="media__details__title">{name}</div>
                <Button>Read the full story</Button>
              </Link>
            </Fragment>
          )}
        />
      </TransitionOnScroll>
    </div>
  );
};

export default ProductItem;
