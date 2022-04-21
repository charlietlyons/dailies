import styles from "./Daily.module.css";

const Daily = (props) => {
  return (
    <li
      key={props.id}
      onClick={() => {
        props.moveHandler(props.id);
      }}
    >
      {props.children}
      <button>Done</button>
    </li>
  );
};

export default Daily;
