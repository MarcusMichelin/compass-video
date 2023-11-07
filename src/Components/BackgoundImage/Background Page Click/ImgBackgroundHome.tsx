import styles from "../../../styles/stylesPage/backgroundInicio.module.css";
import BackgroundHome from "../../../assets/home.png";

const ImgBackgroundHome = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["gradient-overlay"]}></div>
        <img
          src={BackgroundHome}
          alt="Imagem de fundo"
          width={430}
          height={967}
        />
      </div>
    </>
  );
};

export default ImgBackgroundHome;
