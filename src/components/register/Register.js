import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { REGISTER } from "../../reducers/Actions";
import useInput from "../common/hooks/useInput";

import styles from "./Register.module.css";

const Register = () => {
  const [shouldReveal, setShouldReveal] = useState(false);
  const [user, setUser] = useInput();
  const [password, setPassword] = useInput();
  const [passwordConfirmation, setPasswordConfirmation] = useInput();

  const dispatch = useDispatch();

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (password === passwordConfirmation) {
        dispatch({
          type: REGISTER,
          user: user,
          password: password,
        });
      }
    },
    [user, password, passwordConfirmation]
  );

  const revealHandler = useCallback(() => {
    setShouldReveal(!shouldReveal);
  }, [shouldReveal, setShouldReveal]);

  return (
    <div className={styles.registerBox}>
      <button onClick={revealHandler}>Register</button>
      {shouldReveal && (
        <form onSubmit={submitHandler}>
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
      )}
    </div>
  );
};

export default Register;
