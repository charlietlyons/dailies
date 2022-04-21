import colors from "./components/common/css/colors.css";
import fonts from "./components/common/css/fonts.css";
import Header from "./components/header/Header";
import Dailies from "./components/dailies/Dailies";
import { useState } from "react";

const App = () => {
  return (
    <section>
      <Header>Dailies</Header>
      <Dailies />
    </section>
  );
};

export default App;
