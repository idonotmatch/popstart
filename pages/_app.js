import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import ReactGA4 from 'react-ga4';
import { useRouter } from 'next/router';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../styles/globals.css';
import { SearchProvider } from '../context/SearchContext';
import { ListProvider } from '../context/ListContext';
import Layout from '../components/Layout';

// Setup Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: '/api/graphql',
  }),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
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

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <UserProvider skipInitialCheck>
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