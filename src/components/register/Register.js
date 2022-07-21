import { useCallback } from "react";
import usePads from "../common/hooks/usePads";
import useInput from "../common/hooks/useInput";

import styles from "./Register.module.css";

const Register = (props) => {
  const { shouldReveal } = props;
  const [user, setUser] = useInput();
  const [password, setPassword] = useInput();
  const [passwordConfirmation, setPasswordConfirmation] = useInput();
  const { registerWithPads } = usePads();

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (user && password && password === passwordConfirmation) {
        registerWithPads({ user, password }, (response) => {
          response.json().then((data) => {
            console.log(data);
          });
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
