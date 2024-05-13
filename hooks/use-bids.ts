import { useEffect, useState } from "react";
import { IBid } from "@/components/bids";
import { useGetRequest } from "./use-get-request";

const useBids = (houseId: number) => {
  const [bids, setBids] = useState<IBid[]>([]);
  const { fetchResult, loadingState } = useGetRequest<IBid>(`/api/bids/${houseId}`);

  useEffect(() => {
    const fetchBids = async () => {
      const bids = await fetchResult();

      setBids(bids);
    };

    fetchBids();
  }, [fetchResult]);

  const postBid = async (bid: IBid) => {
    await fetch(`/api/bids/${bid.houseId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
    });
  };

  const addBid = (bid: IBid) => {
    postBid(bid);
    setBids([...bids, bid]);
  };

  return { bids, loadingState, addBid };
};

export { useBids };
