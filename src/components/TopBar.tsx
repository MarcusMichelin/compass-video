import styles from "../styles/TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBar_ball}></div>
      <div className={styles.topBar_ball}></div>
      <div className={styles.topBar_ball}></div>
    </div>
  );
};

export default TopBar;
