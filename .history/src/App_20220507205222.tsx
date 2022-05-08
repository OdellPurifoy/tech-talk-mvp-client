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
import GetUsers from './components/getUsers';
// import { onError } from '@apollo/client/link/error';

const link = from([
  new HttpLink({ uri: 'http://localhost:3000/graphql' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GetUsers />
    </ApolloProvider>
  );
}

export default App;
