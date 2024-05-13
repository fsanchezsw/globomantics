import { useCallback, useState } from "react";
import { IHouse, LoadingState } from "@/components/house-list";

const useGetRequest = (requestUrl: string) => {
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.Loading);

  const fetchResult = useCallback(async (): Promise<IHouse[]> => {
    setLoadingState(LoadingState.Loading);

    try {
      const response = await fetch(requestUrl);
      const result = await response.json();

      setLoadingState(LoadingState.Loaded);

      return result;
    } catch {
      setLoadingState(LoadingState.Error);

      return [];
    }
  }, [requestUrl]);

  return { fetchResult, loadingState };
};

export { useGetRequest };
