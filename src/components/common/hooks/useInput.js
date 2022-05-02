import { useState, useCallback } from "react";

const useInput = (initialState = "") => {
  const [value, setValue] = useState(initialState);

  const changeHandler = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return [value, changeHandler];
};

export default useInput;
