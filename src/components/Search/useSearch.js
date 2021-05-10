import { useEffect, useState } from "react";

import Axios from "axios";

const useSearch = ({ specie, limit, submit }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!submit) return;
    if (!specie) return;

    const fetchData = async () => {
      setIsLoading(true);
      const url = `https://hotline.whalemuseum.org/api.json?limit=${limit}&species=${specie}`;
      await Axios.get(url).then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      });
    };
    fetchData();
  }, [limit, specie, submit]);

  return { response, isLoading };
};

export default useSearch;
