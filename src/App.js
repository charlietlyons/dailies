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
import usePads from "./components/common/hooks/usePads";

const App = () => {
  const isLoggedIn = useSelector((store) => store.login.isLoggedIn);
  const { checkAccess } = usePads();
  const dispatch = useDispatch();

  useEffect(() => {
    checkAccess((response) => {
      dispatch({
        type: LOGIN,
        status: response.status === 200 ? "good" : "bad",
      });
    });
  }, []);

  return (
    <section>
      <Header/>
      {(isLoggedIn && (
        <>
          <Percentage />
          <Dailies />
        </>
      )) || <LoginRegisterContainer />}
    </section>
  );
};

export default App;
