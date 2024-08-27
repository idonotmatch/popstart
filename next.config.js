module.exports = {

  reactStrictMode: true,
  images: {
    domains: [
      'i5.walmartimages.com',
      'm.media-amazon.com',
      'images-na.ssl-images-amazon.com'
    ],
  },
    async headers() {
      return [
        {
          source: '/example/:id',
          headers: [
            {
              key: 'cache-control',
              value: 's-maxage=600, stale-while-revalidate=30',
            },
          ],
        },
      ]
    },
  }