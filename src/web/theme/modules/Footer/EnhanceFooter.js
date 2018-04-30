import { graphql } from "react-apollo";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

const CATEGORY_ID = 49;

export default FooterQuery =>
  compose(
    withProps(props => ({
      categoryId: CATEGORY_ID
    })),
    graphql(FooterQuery, {
      options: props => ({
        variables: {
          id: props.categoryId
        }
      }),
      props: ({ data }) => ({
        loading: data.loading,
        category: data.category
      })
    })
  );
