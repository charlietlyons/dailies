import colors from "./components/common/css/colors.css";
import fonts from "./components/common/css/fonts.css";
import Header from "./components/header/Header";
import Dailies from "./components/dailies/Dailies";
import { useState } from "react";

const App = () => {
  const [dailies, setDaily] = useState([
    { id: "0", title: "Budget" },
    { id: "1", title: "Journal" },
    { id: "2", title: "Email" },
    { id: "3", title: "Exercise" },
    { id: "4", title: "Work" },
    { id: "5", title: "Reading" },
    { id: "6", title: "Computer Science" },
    { id: "7", title: "One Thing" },
    { id: "8", title: "Clean" },
    { id: "9", title: "Night Before" },
  ]);

  return (
    <section>
      <Header>Dailies</Header>
      <Dailies dailies={dailies} />
    </section>
  );
};

export default App;
