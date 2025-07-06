import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          ...options,
        });

        if (!response.ok) {
          throw new Error("Some thing went wrong!!");
        }
        const result = await response.json();
        setData(result?.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, isLoading, error };
}
