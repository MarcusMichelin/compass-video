import styles from "../../../styles/stylesPage/backgroundInicio.module.css";
import BackgroundSeries from "../../../assets/series.png";

const BackgroundSeriesHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["gradient-overlay"]}></div>
        <img
          src={BackgroundSeries}
          alt="Imagem de fundo"
          width={430}
          height={967}
        />
      </div>
    </>
  );
};

export default BackgroundSeriesHeader;