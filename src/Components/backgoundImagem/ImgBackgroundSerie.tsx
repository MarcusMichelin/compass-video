import styles from "../../styles/stylesPage/backgroundInicio.module.css";
import BackgroundSerie from "../../assets/dbabcdd870e268369620ddf227dce2e7.png";

const ImgBackgroundSerie = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["gradient-overlay"]}></div>
        <img
          src={BackgroundSerie}
          alt="Imagem de fundo"
          width={430}
          height={967}
        />
      </div>
    </>
  );
};

export default ImgBackgroundSerie;
