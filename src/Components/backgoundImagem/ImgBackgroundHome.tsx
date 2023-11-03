import styles from "../../styles/stylesPage/backgroundInicio.module.css";
import BackgroundHome from "../../assets/289f7f65641869bf1e180e1f1b5553bf.png";

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
