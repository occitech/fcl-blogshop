import React, { Fragment } from "react";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import Link from "theme/ui/atoms/Typography/Link";
import Media from "theme/ui/organisms/Media";
import Button from "theme/ui/atoms/Button";

const ProductItem = ({ name, prices, sku, imageUrl }) => {
  return (
    <div className="media-container">
      <Media
        to={`product/${sku}`}
        media={<img src={createMediaUrlFromPath(imageUrl)} alt={name} />}
        renderDetails={() => (
          <Fragment>
            <Link to={`product/${sku}`} type="reversed">
              <div className="media__details__title">{name}</div>
              <Button>Read the full story</Button>
            </Link>
          </Fragment>
        )}
      />
    </div>
  );
};

export default ProductItem;
