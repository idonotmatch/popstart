import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import '../styles/globals.css'; // Ensure this path correctly points to your global styles file.

// Setup Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: '/api/graphql', // Make sure this matches the Next.js API route you've set for your GraphQL server.
  }),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
