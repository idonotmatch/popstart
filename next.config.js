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
  // Add the serverRuntimeConfig for Auth0
  serverRuntimeConfig: {
    auth0: {
      secret: process.env.AUTH0_SECRET,
      baseURL: process.env.AUTH0_BASE_URL,
      issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
    },
  },
  // Add publicRuntimeConfig if you need to access any of these values on the client side
  publicRuntimeConfig: {
    auth0: {
      baseURL: process.env.AUTH0_BASE_URL,
    },
  },
}