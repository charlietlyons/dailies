import colors from "./components/common/css/colors.css";
import fonts from "./components/common/css/fonts.css";
import styles from "./App.css";

import LoginRegisterContainer from "./LoginRegisterContainer/LoginRegisterContainer";
import Header from "./components/header/Header";
import Dailies from "./components/dailies/Dailies";
import Percentage from "./components/percentage/Percentage";
import { useSelector } from "react-redux";

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
