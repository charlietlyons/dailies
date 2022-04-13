import styles from "./Daily.module.css";

const Daily = (props) => {
  return <li key={props.id}>{props.children}</li>;
};

export default Daily;
