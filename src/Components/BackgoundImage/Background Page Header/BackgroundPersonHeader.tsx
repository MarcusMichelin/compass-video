import styles from "../../../styles/stylesPage/backgroundInicio.module.css";
import BackgroundPerson from "../../../assets/celebridades.png";

const BackgroundPersonHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["gradient-overlay"]}></div>
        <img
          src={BackgroundPerson}
          alt="Imagem de fundo"
          width={430}
          height={967}
        />
      </div>
    </>
  );
};

export default BackgroundPersonHeader;