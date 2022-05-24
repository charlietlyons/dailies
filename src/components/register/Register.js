import { useState, useCallback } from "react";
import useInput from "../common/hooks/useInput";

import styles from "./Register.module.css";

const Register = (props) => {
  const { shouldReveal } = props;
  const [user, setUser] = useInput();
  const [password, setPassword] = useInput();
  const [passwordConfirmation, setPasswordConfirmation] = useInput();

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (user && password && password === passwordConfirmation) {
        fetch("http://localhost:3001/user/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: user,
            password: password,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      }
    },
    [user, password, passwordConfirmation]
  );

  return (
    <div className={styles.registerBox}>
      <form
        onSubmit={submitHandler}
        className={`${styles.registerForm} ${
          shouldReveal ? styles.open : styles.close
        }`}
      >
        <label htmlFor="user">Username</label>
        <input id="register-user" value={user} onChange={setUser} />
        <label htmlFor="password">Password</label>
        <input
          id="register-password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          value={passwordConfirmation}
          onChange={setPasswordConfirmation}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
