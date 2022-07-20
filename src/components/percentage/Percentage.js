import { useSelector } from "react-redux";
import styles from "./Percentage.module.css";

const Percentage = () => {
    const percentage = useSelector(store => store.dailies.percentageCompleted);

    return percentage > 0 && <h1 className={styles.percentage}>{percentage}%</h1>;
}

export default Percentage;