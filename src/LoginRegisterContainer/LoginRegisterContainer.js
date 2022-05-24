import { useState, useCallback } from "react";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

import styles from "./LoginRegisterContainer.module.css";

const LoginRegisterContainer = () => {
  const [shouldDisplayLogin, setShouldDisplayLogin] = useState(false);
  const [shouldDisplayRegister, setShouldDisplayRegister] = useState(false);
  const handlerDependencies = [
    shouldDisplayLogin,
    setShouldDisplayLogin,
    shouldDisplayRegister,
    setShouldDisplayRegister,
  ];

  const displayLoginHandler = useCallback(() => {
    if (shouldDisplayRegister) {
      setShouldDisplayRegister(false);
    }
    setShouldDisplayLogin(!shouldDisplayLogin);
  }, handlerDependencies);

  const displayRegisterHandler = useCallback(() => {
    if (shouldDisplayLogin) {
      setShouldDisplayLogin(false);
    }
    setShouldDisplayRegister(!shouldDisplayRegister);
  }, handlerDependencies);

  return (
    <ul className={styles.loginRegisterContainer}>
      <li>
        <button onClick={displayLoginHandler}>Login</button>
        <Login shouldReveal={shouldDisplayLogin} />
      </li>
      <li>
        <button onClick={displayRegisterHandler}>Register</button>
        <Register shouldReveal={shouldDisplayRegister} />
      </li>
    </ul>
  );
};

export default LoginRegisterContainer;
