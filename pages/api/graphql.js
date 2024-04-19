import { ApolloServer, gql } from '@apollo/server';
import axios from 'axios';

const typeDefs = gql`
type Query {
  searchProducts(searchTerm: String!): [Product]
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
  delivery: Delivery
  shoppingAdvisors: [ShoppingAdvisor]
}

type Delivery {
  tagline: String
  price: String  // Simplified, consider using a structured Price type if necessary
}

type ShoppingAdvisor {
  link: String
  articleTitle: String
}
`;

const resolvers = {
  Query: {
    searchProducts: async (_, { searchTerm }) => {
      const params = {
        api_key: process.env.RAINFOREST_API_KEY,
        type: "search",
        amazon_domain: "amazon.com",
        search_term: searchTerm,
        exclude_sponsored: "true",
        currency: "usd",
        associate_id: "curioustrio-20",
        page: "1",
        max_page: "1",
        output: "json",
        include_html: "false"
      };

      try {
        const response = await axios.get('https://api.rainforestapi.com/request', { params });
        if (response.status !== 200) {
          throw new Error(`API call failed with status: ${response.status}`);
        }

        return response.data.search_results.map(item => ({
          asin: item.asin,
          title: item.title,
          link: item.link,
          image: item.image,
          isPrime: item.is_prime,
          rating: item.rating,
          ratingsTotal: item.ratings_total,
          price: `$${item.price.value.toFixed(2)}`,
          availability: item.availability ? item.availability.raw : "Unavailable",
          delivery: {
            tagline: item.delivery?.tagline || 'No delivery info',
            price: item.delivery?.price?.raw || 'No delivery price'
          },
          shoppingAdvisors: item.shopping_advisors?.map(advisor => ({
            link: advisor.link,
            articleTitle: advisor.article?.title || 'No title'
          })) || []
        }));
      } catch (error) {
        console.error('Failed to fetch data from Rainforest API:', error);
        throw new Error('Failed to fetch data');
      }
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer.createHandler({ path: '/api/graphql' });
export const config = {
  api: {
    bodyParser: false
  }
};


