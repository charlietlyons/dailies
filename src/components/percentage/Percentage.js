import styles from "./Percentage.module.css";

const Percentage = (props) => {
    return <h1 className={styles.percentage}>
        {props.percentage}%
    </h1>
}

export default Percentage;