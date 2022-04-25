import Daily from "../daily/Daily";
import { useSelector } from "react-redux";

import styles from "./Dailies.module.css";
import { useDispatch } from "react-redux";

const Dailies = () => {
  const dailies = useSelector((state) => state.dailies);
  const offset = useSelector((state) => state.offset);
  const offsetStyling = {
      transform: "translateX(-" + offset + "%) translateX(-150px)",
      transition: "transform .75s ease-in-out",
    }

  return (
    <ul
      style={offsetStyling}
    >
      {dailies.length > 0 && dailies.map((daily, index) => {
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
