import Daily from "../daily/Daily";
import { useCallback, useState } from "react";

import styles from "./Dailies.module.css";

const Dailies = (props) => {
  const [selectedDailyIndex, setSelectedDailyIndex] = useState(0);

  const setDailyIndexHandler = useCallback((id) => {
    const newDailyIndex = props.dailies.filter((daily) => daily.id == id)[0].id;
    setSelectedDailyIndex(newDailyIndex);
  });

  return (
    <ul
      style={{
        transform:
          "translateX(" +
          (selectedDailyIndex / props.dailies.length) * -100 +
          "%) translateX(-150px)",
        transition: "transform 1s ease-in-out",
      }}
    >
      {props.dailies.map((daily, index) => {
        return (
          <Daily id={index} moveHandler={setDailyIndexHandler}>
            {daily.title}
          </Daily>
        );
      })}
    </ul>
  );
};

export default Dailies;
