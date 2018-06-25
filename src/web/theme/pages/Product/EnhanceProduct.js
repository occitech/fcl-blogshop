import { graphql } from "react-apollo";

export default ProductQuery =>
  graphql(ProductQuery, {
    options: ({ sku }) => ({
      variables: {
        sku: sku
      }
    }),
    props: ({ data }) => ({
      loading: data.loading,
      product: !data.loading && {
        related: [
          {
            name: "Gravity Skateboard",
            imageUrl: "/media/catalog/product/g/r/gravity-category.png",
            giftMessageAvailable: false,
            type_id: "simple",
            sku: "Gravity Skateboard",
            path: "/product/Gravity Skateboard",
            priority: 1,
            changefreq: null,
            description: null,
            desc: null,
            lastmod: "2018-04-26T11:26:40.000Z",
            meta_title: "Gravity Skateboard",
            meta_description: "Gravity Skateboard "
          },
          {
            name: "Roadster Backpack",
            imageUrl: "/media/catalog/product/r/o/roadster-category.png",
            giftMessageAvailable: false,
            type_id: "simple",
            sku: "Roadster Backpack",
            path: "/roadster-backpack.html",
            priority: 1,
            changefreq: null,
            description: null,
            desc: null,
            lastmod: "2018-04-26T11:07:46.000Z",
            meta_title: "Roadster Backpack",
            meta_description: "Roadster Backpack "
          }
        ],
        ...data.product
      }
    })
  });
