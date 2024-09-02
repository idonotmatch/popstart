import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { source, identifier, country } = req.body;
      let url;
      let params;

      if (!process.env.SCRAPER_API_KEY) {
        throw new Error('SCRAPER_API_KEY is not set');
      }

      if (source === 'amazon') {
        url = `https://api.scraperapi.com/structured/amazon/product`;
        params = {
          api_key: process.env.SCRAPER_API_KEY,
          asin: identifier,
          country
        };
      } else if (source === 'walmart') {
        url = `https://api.scraperapi.com/structured/walmart/product`;
        params = {
          api_key: process.env.SCRAPER_API_KEY,
          id: identifier,
          country
        };
      } else {
        return res.status(400).json({ error: 'Invalid source' });
      }

      console.log('Sending request to Scraper API:', { url, params: { ...params, api_key: '[REDACTED]' } });

      const response = await axios.get(url, { params });
      console.log('Received response from Scraper API:', response.data);

      if (!response.data || !response.data.price) {
        console.log('No price data found for identifier:', identifier);
        return res.status(404).json({ error: 'No price data found' });
      }

      res.status(200).json({ price: response.data.price });
    } catch (error) {
      console.error('Error in refresh-item API route:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 401) {
        res.status(401).json({ error: 'Unauthorized - Check your API key' });
      } else {
        res.status(500).json({ error: 'Error refreshing item', details: error.message });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}