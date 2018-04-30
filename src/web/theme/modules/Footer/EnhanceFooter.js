import { graphql } from "react-apollo";
import compose from "recompose/compose";

const CATEGORY_ID = 49;

export default FooterQuery =>
  compose(
    graphql(FooterQuery, {
      options: props => ({
        variables: {
          id: CATEGORY_ID
        }
      }),
      props: ({ data }) => ({
        loading: data.loading,
        category: data.category
      })
    })
  );
