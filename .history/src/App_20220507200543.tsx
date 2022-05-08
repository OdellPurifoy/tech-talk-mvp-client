import React from 'react';
import {
  ApolloClient,
  // createHttpLink,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { gql } from 'apollo-boost';
// import { onError } from '@apollo/client/link/error';

const link = from([
  new HttpLink({ uri: 'http://localhost:3000/graphql' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

client
  .query({
    query: gql`
      {
        users {
          firstName
          lastName
          email
        }
      }
    `
  })
  .then(result => console.log(result));


function App() {
  return (
    <ApolloProvider client={client}>
      <div>Hello</div>
    </ApolloProvider>
  );
}

export default App;
