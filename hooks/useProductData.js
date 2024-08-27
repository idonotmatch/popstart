import { useState, useEffect } from 'react';

const useProductData = (productId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!productId) return;

      setLoading(true);
      try {
        const response = await fetch(`/api/product-details/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  return { data, loading, error };
};

export default useProductData;