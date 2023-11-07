import styles from "../../styles/stylesPage/backgroundInicio.module.css";
import BackgroundFilmes from "../../assets/filmes.png";

const ImgBackgroundFilme = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["gradient-overlay"]}></div>
        <img
          src={BackgroundFilmes}
          alt="Imagem de fundo"
          width={430}
          height={967}
        />
      </div>
    </>
  );
};

export default ImgBackgroundFilme;
