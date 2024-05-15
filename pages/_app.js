import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import ReactGA4 from 'react-ga4';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { SearchProvider } from '../context/SearchContext'; // Import SearchProvider

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
    // Initialize GA4 with the ID from environment variables
    ReactGA4.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

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
      <SearchProvider> {/* Wrap the application with SearchProvider */}
        <Component {...pageProps} />
      </SearchProvider>
    </ApolloProvider>
  );
}

export default MyApp;
