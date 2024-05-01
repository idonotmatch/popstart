import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import ReactGA4 from 'react-ga4';
import { useRouter } from 'next/router';
import '../styles/globals.css'; // Ensure this path correctly points to your global styles file.

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your Measurement ID

// Setup Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: '/api/graphql', // Make sure this matches the Next.js API route you've set for your GraphQL server.
  }),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA4.initialize(GA_MEASUREMENT_ID);

    const handleRouteChange = (url) => {
      ReactGA4.send({ hitType: "pageview", page: url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup subscription on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
