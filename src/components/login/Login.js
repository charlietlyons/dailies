import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../reducers/Actions";
import useInput from "../common/hooks/useInput";

import styles from "./Login.module.css";

const Login = () => {
  const [shouldReveal, setShouldReveal] = useState(false);
  const [user, changeUserHandler] = useInput("");
  const [password, changePasswordHandler] = useInput("");

  const dispatch = useDispatch();

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (user && password) {
        fetch("http://localhost:3001/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: user,
            password: password,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("PADS_TOKEN", data.token);
            dispatch({
              type: LOGIN,
              user: user,
              status: data.status,
            });
          });
      }
    },
    [user, password]
  );

  const revealHandler = useCallback(() => {
    setShouldReveal(!shouldReveal);
  }, [shouldReveal, setShouldReveal]);

  return (
    <div className={styles.loginBox}>
      <button onClick={revealHandler} className={styles.loginButton}>
        Login
      </button>
      {shouldReveal && (
        <form onSubmit={submitHandler}>
          <label htmlFor="user">Username</label>
          <input id="user" value={user} onChange={changeUserHandler} />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={changePasswordHandler}
          />
          <input type="submit" value="Login" />
        </form>
      )}
    </div>
  );
};

export default Login;
