import styles from "../../styles/stylesPage/backgroundInicio.module.css";
import BackgroundCelebridades from "../../assets/87d8dc385aa834171d5db634868fe408.png";

const ImgBackgroundCelebridades = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["gradient-overlay"]}></div>
        <img
          src={BackgroundCelebridades}
          alt="Imagem de fundo"
          width={430}
          height={967}
        />
      </div>
    </>
  );
};

export default ImgBackgroundCelebridades;
