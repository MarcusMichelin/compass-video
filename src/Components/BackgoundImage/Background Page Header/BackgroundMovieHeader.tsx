import styles from "../../../styles/stylesPage/backgroundInicio.module.css";
import BackgroundMovie from "../../../assets/filmes.png";

const BackgroundMovieHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["gradient-overlay"]}></div>
        <img
          src={BackgroundMovie}
          alt="Imagem de fundo"
          width={430}
          height={967}
        />
      </div>
    </>
  );
};

export default BackgroundMovieHeader;