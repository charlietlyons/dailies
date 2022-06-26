import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../reducers/Actions";
import useInput from "../common/hooks/useInput";
import usePads from "../common/hooks/usePads";

import styles from "./Login.module.css";

const Login = (props) => {
  const { shouldReveal } = props;
  const [user, changeUserHandler] = useInput("");
  const [password, changePasswordHandler] = useInput("");
  const { loginToPads } = usePads();

  const dispatch = useDispatch();

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (user && password) {
        loginToPads({ user, password }, (response) => {
          response.json().then((data) => {
            localStorage.setItem("PADS_TOKEN", data.token);
            dispatch({
              type: LOGIN,
              user: user,
              status: data.status,
            });
          });
        });
      }
    },
    [user, password]
  );

  return (
    <div className={styles.loginBox}>
      <form
        onSubmit={submitHandler}
        className={`${shouldReveal ? styles.open : ""} ${styles.loginForm}`}
      >
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
    </div>
  );
};

export default Login;
