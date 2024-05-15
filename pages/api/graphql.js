import { gql } from 'apollo-server-micro';
import axios from 'axios';

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
    delivery: Delivery
    shoppingAdvisors: [ShoppingAdvisor]
    fulfillment: Fulfillment
    source: String
    brand: String
  }

  type Delivery {
    tagline: String
    price: String
  }

  type Fulfillment {
    pickup: Boolean
    deliveryFromStore: Boolean
    shipping: Boolean
    shippingDays: Int
  }

  type ShoppingAdvisor {
    link: String
    articleTitle: String
  }
`;

const resolvers = {
  Query: {
    searchProducts: async (_, { searchTerm, source }) => {
      let data = [];
      if (source === 'rainforest') {
        const params = {
          api_key: process.env.RAINFOREST_API_KEY,
          type: "search",
          amazon_domain: "amazon.com",
          search_term: searchTerm
        };

        try {
          const response = await axios.get('https://api.rainforestapi.com/request', { params });
          console.log('Rainforest API response:', response.data);
          if (response.status !== 200) {
            throw new Error(`API call failed with status: ${response.status}`);
          }

          data = response.data.search_results.map((item, index) => {
            console.log(`Rainforest item ${index + 1}:`, item);
            return {
              asin: item.asin,
              title: item.title,
              link: item.link,
              image: item.image,
              isPrime: item.is_prime,
              rating: item.rating,
              ratingsTotal: item.ratings_total,
              price: item.price?.value ? `$${item.price.value}` : 'Unavailable',
              availability: item.availability || 'Unavailable',
              delivery: item.delivery ? {
                tagline: item.delivery.tagline,
                price: item.delivery.price
              } : null,
              shoppingAdvisors: [],
              fulfillment: null,
              source: 'rainforest',
              brand: item.brand || 'Unavailable'
            };
          });
          console.log('Extracted Rainforest data:', data);
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
          const response = await axios.get('https://api.bluecartapi.com/request', { params });
          console.log('Bluecart API response:', response.data);
          if (response.status !== 200) {
            throw new Error(`API call failed with status: ${response.status}`);
          }

          data = response.data.search_results.map((item, index) => {
            console.log(`Bluecart item ${index + 1}:`, item);
            return {
              asin: item.product.item_id,
              title: item.product.title,
              link: item.product.link,
              image: item.product.main_image,
              isPrime: false,
              rating: item.product.rating,
              ratingsTotal: item.product.ratings_total,
              price: `$${item.offers.primary.price}`,
              availability: item.inventory.in_stock ? "In Stock" : "Out of Stock",
              delivery: null,
              shoppingAdvisors: [],
              fulfillment: {
                pickup: item.fulfillment.pickup,
                deliveryFromStore: item.fulfillment.delivery_from_store,
                shipping: item.fulfillment.shipping,
                shippingDays: item.fulfillment.shipping_days
              },
              source: 'bluecart',
              brand: item.product.brand || 'Unavailable'
            };
          });
          console.log('Extracted Bluecart data:', data);
        } catch (error) {
          console.error('Failed to fetch data from Bluecart API:', error);
          throw new Error('Failed to fetch data');
        }
      }

      data = data.filter(product => product.source !== 'bluecart' || !product.sponsored);

      return data;
    },
    searchProductsCombined: async (_, { searchTerm }) => {
      const rainforestResults = await resolvers.Query.searchProducts(_, { searchTerm, source: 'rainforest' });
      const bluecartResults = await resolvers.Query.searchProducts(_, { searchTerm, source: 'bluecart' });

      return [...rainforestResults, ...bluecartResults];
    }
  }
};

export { typeDefs, resolvers };
