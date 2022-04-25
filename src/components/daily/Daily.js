import { useDispatch } from "react-redux";
import { DELETE_DAILY, SELECT_DAILY } from "../../reducers/Actions";
import styles from "./Daily.module.css";

const Daily = (props) => {
  const { id, title, children } = props
  const dispatch = useDispatch();

  return (
    <li
      key={id + "-" + title}
      onClick={() => {
        dispatch({ type: SELECT_DAILY, selected: { title } })
      }}
    >
      <h3>{title}</h3>
      {children}
      <button
        onClick={() => {
          dispatch({ type: DELETE_DAILY, selected: { title }})}
        }
      >
        Done
      </button>
    </li>
  );
};

export default Daily;
