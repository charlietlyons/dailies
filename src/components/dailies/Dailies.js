import Daily from "../daily/Daily";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SHIFT_DAILIES } from "../../reducers/Actions";

import styles from "./Dailies.module.css";

const Dailies = () => {
  const dailies = useSelector((state) => state.dailies);
  const selectedDaily = useSelector((state) => state.selected);
  const offset = (dailies.indexOf(selectedDaily) / dailies.length) * -100;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SHIFT_DAILIES, title: selectedDaily.title });
  }, []);

  return (
    <ul
      style={{
        transform: "translateX(" + offset + "%) translateX(-150px)",
        transition: "transform 1s ease-in-out",
      }}
    >
      {dailies.map((daily, index) => {
        return (
          <Daily id={index} title={daily.title}>
            {daily.children ? daily.children : null}
          </Daily>
        );
      })}
    </ul>
  );
};

export default Dailies;
