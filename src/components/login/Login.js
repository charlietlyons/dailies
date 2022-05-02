import { useState, useCallback, Fragment } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { LOGIN } from "../../reducers/Actions";

import styles from "./Login.module.css";

const Login = () => {
  const isLoggedIn = useSelector((store) => store.login.isLoggedIn);
  const [shouldReveal, setShouldReveal] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = useCallback((event) => {
    event.preventDefault();
    dispatch({
      type: LOGIN,
      user,
      password,
    });
  });

  const revealHandler = useCallback(() => {
    setShouldReveal(!shouldReveal);
  }, [shouldReveal, setShouldReveal]);

  const changeUserHandler = useCallback(
    (event) => {
      setUser(event.target.value);
    },
    [setUser]
  );
  const changePasswordHandler = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    !isLoggedIn && (
      <div className={styles.loginBox}>
        <button onClick={revealHandler}>Login</button>
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
    )
  );
};

export default Login;
