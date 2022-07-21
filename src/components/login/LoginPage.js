import colors from "../common/css/colors.css";
import fonts from "../common/css/fonts.css";
import common from "../common/css/common.css";
import styles from "../../App.css";

import LoginRegisterContainer from "./LoginRegisterContainer/LoginRegisterContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGIN } from "../../reducers/Actions";
import usePads from "../common/hooks/usePads";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
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
    <>
      {isLoggedIn && <Navigate to="/dailies" /> }
      {!isLoggedIn && (
        <section>
          <LoginRegisterContainer />
        </section>
      )}
    </>
  );
};

export default LoginPage;
