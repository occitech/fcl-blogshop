import { graphql } from "react-apollo";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

const CATEGORY_ID = 49;
const SIZE = 9;

export default HeaderQuery =>
  compose(
    withProps(props => ({
      categoryId: CATEGORY_ID
    })),
    graphql(HeaderQuery, {
      options: props => ({
        variables: {
          id: props.categoryId,
          params: {
            size: props.size,
            from: 0
          }
        }
      }),
      props: ({ data }) => ({
        category: data.category,
        loading: data.loading
      })
    })
  );
