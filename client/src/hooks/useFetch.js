import { useEffect, useState } from "react";
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
        const res = await mockFetch(url);
        setData(res.data);
        setIsMockData(true);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error, isMockData };
};

export default useFetch;
