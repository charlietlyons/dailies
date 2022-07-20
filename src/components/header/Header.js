import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../reducers/Actions";

import styles from "./Header.module.css";

const Header = () => {
  const username = useSelector((store) => store.login.username);
  const dispatch = useDispatch();

  return (
    <header>
      {username ? `${username}'s ` : ""} Dailies
      {username ? (
        <button onClick={() => dispatch({ type: LOGOUT })}>Logout</button>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
