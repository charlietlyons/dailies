import colors from "./components/common/css/colors.css";
import fonts from "./components/common/css/fonts.css";
import styles from "./App.css";

import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Dailies from "./components/dailies/Dailies";
import Percentage from "./components/percentage/Percentage";
import { useSelector } from "react-redux";

const App = () => {
  const percentage = useSelector((store) => {
    return (
      (store.completedDailies.length /
        (store.incompleteDailies.length + store.completedDailies.length)) *
      100
    );
  });

  return (
    <section>
      <Header>Dailies</Header>
      <Percentage percentage={percentage} />
      <Dailies />
      <Login />
    </section>
  );
};

export default App;
