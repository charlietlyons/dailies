import { useDispatch } from "react-redux";
import { DELETE_DAILY, SELECT_DAILY } from "../../reducers/Actions";
import styles from "./Daily.module.css";

const Daily = (props) => {
  const dispatch = useDispatch();

  return (
    <li
      key={props.id + "-" + props.title}
      onClick={() =>
        dispatch({ type: SELECT_DAILY, selected: { title: props.title } })
      }
    >
      <h3>{props.title}</h3>
      {props.children}
      <button
        onClick={() =>
          dispatch({ type: DELETE_DAILY, selected: { title: props.title } })
        }
      >
        Done
      </button>
    </li>
  );
};

export default Daily;
