import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://graphql-pokemon2.vercel.app/",
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemon: {
          read(_, { args, toReference }) {
            return toReference({
              __typename: "Pokemon",
              name: args?.name,
            });
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;
