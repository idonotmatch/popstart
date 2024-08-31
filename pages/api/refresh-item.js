import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { source, query, country } = req.body;
      const url = `https://api.scraperapi.com/structured/${source}/search`;
      const params = {
        api_key: process.env.SCRAPER_API_KEY,
        query,
        country
      };

      console.log('Sending request to Scraper API:', { url, params: { ...params, api_key: '[REDACTED]' } });

      const response = await axios.get(url, { params });
      console.log('Received response from Scraper API:', response.data);

      const newData = response.data.results[0];

      if (!newData) {
        console.log('No results found for query:', query);
        return res.status(404).json({ error: 'No results found' });
      }

      res.status(200).json(newData);
    } catch (error) {
      console.error('Error in refresh-item API route:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Error refreshing item', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}