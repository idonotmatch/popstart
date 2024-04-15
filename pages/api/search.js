import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    console.log('Method not allowed');
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
    console.log('Making API request', params);
    const response = await axios.get('https://api.rainforestapi.com/request', { params });
    console.log('API response received');

    if (response.status === 200) {
      console.log('Successful API response');
      return res.status(200).json(response.data);
    } else {
      throw new Error(`API call failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Search API error:', error);
    if (error.response) {
      console.log('API responded with an error', error.response.data);
      return res.status(error.response.status).json({ message: error.response.data.message });
    } else {
      console.log('Error making API request');
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
