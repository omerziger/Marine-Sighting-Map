import Axios from "axios";
import { useEffect, useState } from "react";

const useSearch = ({ specie, limit, submit }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!submit) return;
    if (!specie) return;

    const fetchData = async () => {
      setIsLoading(true);
      const url = `http://hotline.whalemuseum.org/api.json?limit=${limit}&species=${specie}`;
      await Axios.get(url).then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      });
    };
    fetchData();
  }, [limit, specie, response, submit]);

  return { response, isLoading };
};

export default useSearch;
