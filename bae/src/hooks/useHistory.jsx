import { useEffect, useState } from "react";
import { LINK_API_PROJECT } from "../include/until";

function useFetchHistorys({idUser, dependencies = [] }) {
  const [historys, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchHistorys = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${LINK_API_PROJECT}api/cartapi/iduser=${idUser}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        if (!isCancelled) {
          const data = await response.json();
          setHistory(data);
        }
      } catch (error) {
        if (!isCancelled) setError(error.message);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    fetchHistorys();
    return () => {
      isCancelled = true;
    };
  }, dependencies);

  return { historys, loading, error };
}

export default useFetchHistorys;
