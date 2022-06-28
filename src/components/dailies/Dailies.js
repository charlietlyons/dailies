import Daily from "../daily/Daily";
import { useSelector } from "react-redux";

import styles from "./Dailies.module.css";
import { useDispatch } from "react-redux";
import usePads from "../common/hooks/usePads";
import { useEffect, useState } from "react";

const Dailies = () => {
  // TODO: query dailies here?
  const { retrieveDailies } = usePads();
  const [dailiesFromPads, setDailiesFromPads] = useState([]);
  const dailies = useSelector((state) => state.dailies.incompleteDailies);
  const offset = useSelector((state) => state.dailies.offset);
  const offsetStyling = {
    transform: "translateX(-" + offset + "%) translateX(-150px)",
    transition: "transform .75s ease-in-out",
  };

  useEffect(() => {
    retrieveDailies((data) => {
      console.log(data.dailies[0]);
      setDailiesFromPads(data.dailies);
    });
  }, [retrieveDailies, dailiesFromPads]);

  return (
    <div className={styles.dailiesContainer}>
      <ul style={offsetStyling} className={styles.dailies}>
        {dailiesFromPads.length > 0 &&
          dailiesFromPads.map((daily, index) => {
            return (
              (
                <Daily id={daily._id} title={daily.title}>
                  {daily.children ? daily.children : null}
                </Daily>
              )
            );
          })}
      </ul>
    </div>
  );
};

export default Dailies;
