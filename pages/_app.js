import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import ReactGA4 from 'react-ga4';
import { useRouter } from 'next/router';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../styles/globals.css'; // Ensure this path is correct
import { SearchProvider } from '../context/SearchContext'; // Ensure this path is correct
import { ListProvider } from '../context/ListContext'; // Ensure this path is correct
import Layout from '../components/Layout'; // Ensure this path is correct

// Setup Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: '/api/graphql', // Ensure this endpoint is correct
  }),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize GA4 with the ID from environment variables
    const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (gaMeasurementId) {
      ReactGA4.initialize(gaMeasurementId);
    } else {
      console.error('GA Measurement ID is not defined');
    }

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
    <UserProvider>
      <ApolloProvider client={client}>
        <SearchProvider>
          <ListProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ListProvider>
        </SearchProvider>
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
