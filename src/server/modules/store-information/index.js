import typeDefs from "./schema.gql";
import loader from "./loader";
import resolvers from "./resolvers";

export default {
  namespace: "StoreInformation",
  // dependencies: ['Magento2/Catalog'],
  context: loader,
  typeDefs,
  resolvers
};
