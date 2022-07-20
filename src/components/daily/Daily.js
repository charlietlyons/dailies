import { useDispatch } from "react-redux";
import { DELETE_DAILY, SELECT_DAILY } from "../../reducers/Actions";

import styles from "./Daily.module.css";

const Daily = (props) => {
  const { id, title, children } = props;

  const dispatch = useDispatch();

  return (
    <div
      className={styles.daily}
      onClick={() =>
        dispatch({ type: SELECT_DAILY, newlySelectedDailyId: id })
      }
    >
      <h3>{title}</h3>
      {children}
      <button
        onClick={() => 
          dispatch({ type: DELETE_DAILY, newlySelectedDailyId: id })
        }
      >
        Done
      </button>
    </div>
  );
};

export default Daily;
