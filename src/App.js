import colors from "./components/common/css/colors.css";
import fonts from "./components/common/css/fonts.css";
import common from "./components/common/css/common.css";
import styles from "./App.css";

import LoginRegisterContainer from "./LoginRegisterContainer/LoginRegisterContainer";
import Header from "./components/header/Header";
import Dailies from "./components/dailies/Dailies";
import Percentage from "./components/percentage/Percentage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGIN } from "./reducers/Actions";

const App = () => {
  const isLoggedIn = useSelector((store) => store.login.isLoggedIn);
  const percentage = useSelector((store) => {
    return (
      (store.dailies.completedDailies.length /
        (store.dailies.incompleteDailies.length +
          store.dailies.completedDailies.length)) *
      100
    );
  });
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/user/access", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("PADS_TOKEN"),
      },
    }).then((response) => {
      dispatch({
        type: LOGIN,
        status: response.status === 200 ? "good" : "bad",
      });
    });
  }, [isLoggedIn]);

  return (
    <section>
      <Header>Dailies</Header>
      {(isLoggedIn && (
        <>
          <Percentage percentage={percentage} />
          <Dailies />
        </>
      )) || <LoginRegisterContainer />}
    </section>
  );
};

export default App;
