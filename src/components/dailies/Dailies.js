import Daily from "../daily/Daily";

import styles from "./Dailies.module.css";

const Dailies = (props) => {
  return (
    <ul>
      {props.dailies.map((daily, index) => {
        return <Daily id={daily.title + index}>{daily.title}</Daily>;
      })}
    </ul>
  );
};

export default Dailies;
