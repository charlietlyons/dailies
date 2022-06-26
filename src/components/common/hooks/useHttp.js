import { useCallback } from "react";

const useHttp = () => {
  const callUsingFetch = useCallback(
    async (url, config, callback = (response) => response) => {
      return await fetch(url, config).then((response) => callback(response));
    },
    []
  );

  return {
    callUsingFetch,
  };
};

export default useHttp;
