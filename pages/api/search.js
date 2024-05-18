import axios from 'axios';

const mapBluecartProduct = (item) => ({
  asin: item.product.item_id, // Using item_id as a unique identifier
  brand: item.product.brand,
  title: item.product.title,
  link: item.product.link,
  image: item.product.main_image || (item.product.images.length > 0 ? item.product.images[0] : ""),
  isPrime: false, // Assuming Bluecart doesn't provide this information
  rating: item.product.rating || 0,
  ratingsTotal: item.product.ratings_total || 0,
  price: item.offers.primary ? `${item.offers.primary.currency_symbol}${item.offers.primary.price}` : "N/A",
  availability: item.inventory.in_stock ? "In stock" : "Out of stock",
  delivery: {
    tagline: item.fulfillment.shipping ? `Shipping available in ${item.fulfillment.shipping_days} days` : "No shipping available",
    price: "" // No delivery price information in the sample provided
  },
  shoppingAdvisors: [], // Assuming no shopping advisors in Bluecart data
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    console.log('Method not allowed');
    return res.status(405).end(); // Method Not Allowed
  }

  const { term, page } = req.query;

  const rainforestParams = {
    api_key: process.env.RAINFOREST_API_KEY,
    type: "search",
    amazon_domain: "amazon.com",
    search_term: term,
    exclude_sponsored: "true",
    currency: "usd",
    associate_id: "curios-20",
    page: page || "1",
    max_page: page || "1",
    output: "json",
    include_html: "false"
  };

  const bluecartParams = {
    api_key: process.env.BLUECART_API_KEY,
    search_term: term,
    type: "search",
    sort_by: "best_match",
    page: page || "1",
    max_page: page || "1",
    output: "json",
    include_html: "false"
  };

  try {
    const [rainforestResponse, bluecartResponse] = await Promise.all([
      axios.get('https://api.rainforestapi.com/request', { params: rainforestParams }),
      axios.get('https://api.bluecartapi.com/request', { params: bluecartParams })
    ]);

    if (rainforestResponse.status === 200 && bluecartResponse.status === 200) {
      const rainforestResults = rainforestResponse.data.search_results.map((item) => ({
        asin: item.asin,
        brand: item.brand,
        title: item.title,
        link: item.link,
        image: item.image,
        isPrime: item.is_prime,
        rating: item.rating,
        ratingsTotal: item.ratings_total,
        price: item.price ? item.price.raw : "N/A",
        availability: item.availability,
        delivery: item.delivery || { tagline: "", price: "" },
        shoppingAdvisors: item.shopping_advisors || [],
      }));

      const bluecartResults = bluecartResponse.data.search_results.map(mapBluecartProduct);

      const combinedResults = [
        ...rainforestResults,
        ...bluecartResults
      ];

      return res.status(200).json({ results: combinedResults });
    } else {
      throw new Error(`API calls failed with statuses: Rainforest: ${rainforestResponse.status}, Bluecart: ${bluecartResponse.status}`);
    }
  } catch (error) {
    console.error('Search API error:', error.message);
    if (error.response) {
      return res.status(error.response.status).json({ message: error.response.data.message });
    } else {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
