import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { searchTerm } = req.body;

  const params = {
    api_key: process.env.RAINFOREST_API_KEY, // Ensure this is set in your environment variables
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

    if (response.status === 200) {
      // Assuming the data structure returned by Rainforest is directly usable
      return res.status(200).json(response.data);
    } else {
      // Handle cases where the API returns a non-200 status
      throw new Error(`API call failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Search API error:', error);
    if (error.response) {
      // Handle specific API errors or bad responses
      return res.status(error.response.status).json({ message: error.response.data.message });
    } else {
      // Generic error handling if the request failed before hitting the API
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
