import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";
import { mockFetch } from "../data/mockCatalog";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isMockData, setIsMockData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await makeRequest.get(url);
        setData(res.data.data);
        setIsMockData(false);
      } catch (err) {
        try {
          const fallback = await mockFetch(url);
          setData(fallback.data);
          setError(false);
          setIsMockData(true);
        } catch (fallbackError) {
          setError(true);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error, isMockData };
};

export default useFetch;
