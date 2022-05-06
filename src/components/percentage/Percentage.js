import styles from "./Percentage.module.css";

const Percentage = (props) => {
    const { percentage } = props;

    return percentage === null && <h1 className={styles.percentage}>{percentage}%</h1>;
}

export default Percentage;