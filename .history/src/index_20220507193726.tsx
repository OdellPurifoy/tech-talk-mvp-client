import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { gql } from 'apollo-boost';

const client = new ApolloClient<InMemoryCache>({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'http://localhost:3000/graphql',
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
