import colors from "./components/common/css/colors.css";
import fonts from "./components/common/css/fonts.css";
import styles from "./App.css";

import Header from "./components/header/Header";
import Dailies from "./components/dailies/Dailies";
import Percentage from "./components/percentage/Percentage";
import { useSelector } from "react-redux";

const App = () => {
  // TODO: more vvv
  const percentage = useSelector((store) => store.dailies.length);

  return (
    <section>
      <Header>Dailies</Header>
      <Percentage percentage={percentage} />
      <Dailies />
    </section>
  );
};

export default App;
