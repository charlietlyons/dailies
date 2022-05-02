import { useState, useCallback, Fragment } from "react";

import styles from "./Login.module.css";

const Login = () => {
  const [shouldReveal, setShouldReveal] = useState(false);

  const revealHandler = useCallback(() => {
    setShouldReveal(!shouldReveal);
  }, [shouldReveal, setShouldReveal]);

  return (
    <div className={styles.loginBox}>
      <button onClick={revealHandler}>Login</button>
      {shouldReveal && (
        <form action={(formData) => console.log(formData)}>
          <label htmlFor="user">Username</label>
          <input id="user" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
          <input type="submit" value="Login" />
        </form>
      )}
    </div>
  );
};

export default Login;
