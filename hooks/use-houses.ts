import { useState, useEffect } from "react";
import { IHouse } from "@/components/house-list";
import { useGetRequest } from "./use-get-request";

const useHouses = () => {
  const [houses, setHouses] = useState<IHouse[]>([]);
  const { fetchResult, loadingState } = useGetRequest("/api/houses");

  useEffect(() => {
    const fetchHouses = async () => {
      const result = await fetchResult();

      setHouses(result);
    };

    fetchHouses();
  }, [fetchResult]);

  return { houses, setHouses, loadingState };
};

export { useHouses };
