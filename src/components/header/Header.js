import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../reducers/Actions";

import styles from "./Header.module.css";

const Header = () => {
  const { username, isLoggedIn } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  return (
    <header>
      {username ? `${username}'s ` : ""} Dailies
      {isLoggedIn ? (
        <button onClick={() => dispatch({ type: LOGOUT })}>Logout</button>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
