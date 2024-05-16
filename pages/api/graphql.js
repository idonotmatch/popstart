import { gql } from 'apollo-server-micro';
import got from 'got';

const typeDefs = gql`
  type Query {
    searchProducts(searchTerm: String!, source: String!): [Product]
    searchProductsCombined(searchTerm: String!): [Product]
  }

  type Product {
    asin: String
    title: String
    link: String
    image: String
    isPrime: Boolean
    rating: Float
    ratingsTotal: Int
    price: String
    availability: String
    source: String
    brand: String
  }
`;

const fetchWithRetry = async (url, params, retries = 3) => {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      const response = await got(url, { searchParams: params, responseType: 'json' });
      if (response.statusCode === 200) {
        return response.body;
      }
      lastError = new Error(`API call failed with status: ${response.statusCode}`);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
};

const resolvers = {
  Query: {
    searchProducts: async (_, { searchTerm, source }) => {
      let data = [];
      const start = performance.now(); // Start timer for logging

      if (source === 'rainforest') {
        const params = {
          api_key: process.env.RAINFOREST_API_KEY,
          type: "search",
          amazon_domain: "amazon.com",
          search_term: searchTerm,
          fields: "asin,title,link,image,is_prime,rating,ratings_total,price,availability,brand" // Request only necessary fields
        };

        try {
          const response = await fetchWithRetry('https://api.rainforestapi.com/request', params);
          data = response.search_results.map((item) => ({
            asin: item.asin,
            title: item.title,
            link: item.link,
            image: item.image,
            isPrime: item.is_prime,
            rating: item.rating,
            ratingsTotal: item.ratings_total,
            price: item.price?.value ? `$${item.price.value}` : 'Unavailable',
            availability: item.availability || 'Unavailable',
            source: 'rainforest',
            brand: item.brand || 'Unavailable'
          }));
        } catch (error) {
          console.error('Failed to fetch data from Rainforest API:', error);
          throw new Error('Failed to fetch data');
        }
      } else if (source === 'bluecart') {
        const params = {
          api_key: process.env.BLUECART_API_KEY,
          search_term: searchTerm,
          type: "search",
          sort_by: "best_match",
          page: "1",
          max_page: "1",
          output: "json",
          include_html: "false"
        };

        try {
          const response = await fetchWithRetry('https://api.bluecartapi.com/request', params);
          data = response.search_results.map((item) => ({
            asin: item.product.item_id,
            title: item.product.title,
            link: item.product.link,
            image: item.product.main_image,
            isPrime: false,
            rating: item.product.rating,
            ratingsTotal: item.product.ratings_total,
            price: `$${item.offers.primary.price}`,
            availability: item.inventory.in_stock ? "In Stock" : "Out of Stock",
            source: 'bluecart',
            brand: item.product.brand || 'Unavailable'
          }));
        } catch (error) {
          console.error('Failed to fetch data from Bluecart API:', error);
          throw new Error('Failed to fetch data');
        }
      }

      const end = performance.now(); // End timer
      console.log(`API call for ${source} took ${end - start} milliseconds`); // Log time taken

      return data;
    },
    searchProductsCombined: async (_, { searchTerm }) => {
      const start = performance.now(); // Start timer
      const [rainforestResults, bluecartResults] = await Promise.all([
        resolvers.Query.searchProducts(_, { searchTerm, source: 'rainforest' }),
        resolvers.Query.searchProducts(_, { searchTerm, source: 'bluecart' })
      ]);
      const end = performance.now(); // End timer
      console.log(`Combined search took ${end - start} milliseconds`); // Log time taken

      return [...rainforestResults, ...bluecartResults];
    }
  }
};

export { typeDefs, resolvers };
