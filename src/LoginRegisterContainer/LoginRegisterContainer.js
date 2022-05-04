import Login from "../components/login/Login";
import Register from "../components/register/Register";

import styles from "./LoginRegisterContainer.module.css";

const LoginRegisterContainer = () => {
  return (
    <ul className={styles.loginRegisterContainer}>
      <Login />
      <Register />
    </ul>
  );
};

export default LoginRegisterContainer;
