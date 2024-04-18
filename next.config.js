module.exports = {
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