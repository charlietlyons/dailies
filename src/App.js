import colors from "./components/common/css/colors.css";
import fonts from "./components/common/css/fonts.css";
import Header from "./components/header/Header";
import Dailies from "./components/dailies/Dailies";
import { useState } from "react";

const App = () => {
  const [dailies, setDaily] = useState([
    { title: "asdf" },
    { title: "qwerty" },
    { title: "studpi dumb" },
    { title: "other thing" },
    { title: "dailies" },
  ]);

  return (
    <section>
      <Header>Dailies</Header>
      <Dailies dailies={dailies} />
    </section>
  );
};

export default App;
