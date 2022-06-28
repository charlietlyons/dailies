import { useCallback } from "react";
import { useSelector } from "react-redux";
import useHttp from "./useHttp";

const usePads = () => {
  const commonHeaders = { "Content-Type": "application/json" };

  // const username = useSelector((store) => )

  const isLoggedIn = useSelector((store) => store.login.isLoggedIn);
  const { callUsingFetch } = useHttp();

  const loginToPads = useCallback((credentials, callback) => {
    callUsingFetch(
      "http://localhost:3001/user/login",
      {
        method: "POST",
        headers: commonHeaders,
        body: JSON.stringify({
          user: credentials.user,
          password: credentials.password,
        }),
      },
      (response) => {
        console.log(response);
        callback(response);
      }
    );
  }, []);

  const registerWithPads = useCallback((credentials, callback) => {
    callUsingFetch(
      "http://localhost:3001/user/register",
      {
        method: "POST",
        headers: commonHeaders,
        body: JSON.stringify({
          user: credentials.user,
          password: credentials.password,
        }),
      },
      (response) => callback(response)
    );
  }, []);

  const checkAccess = useCallback(
    (callback) => {
      callUsingFetch(
        "http://localhost:3001/user/access",
        {
          method: "GET",
          headers: {
            ...commonHeaders,
            authorization: localStorage.getItem("PADS_TOKEN"),
          },
        },
        (response) => callback(response)
      );
    },
    [isLoggedIn]
  );

  const retrieveDailies = useCallback((callback) => {
    callUsingFetch(
      "http://localhost:3001/daily",
      {
        method: "GET",
        headers: {
          ...commonHeaders,
          authorization: localStorage.getItem("PADS_TOKEN"),
        },
      },
      async (response) => {
        callback(await response.json());
      }
    );
  }, []);

  return {
    loginToPads,
    registerWithPads,
    checkAccess,
    retrieveDailies,
  };
};

export default usePads;
