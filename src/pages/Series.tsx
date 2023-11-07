import styles from "../styles/stylesPage/Home.module.css";
import IconAdd from "../assets/icons/add.svg";
import IconFavorito from "../assets/icons/favorito.svg";
import Header from "../Components/Header";
import BackgroundSeriesHeader from "../Components/BackgoundImage/Background Page Header/BackgroundSeriesHeader.tsx";
import Carousel from "../Components/Carousel/Carousel.tsx";

const Serie = () => {
  return (
    <>
      <BackgroundSeriesHeader />
      <Header />
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>LOKI</h2>
            <p className={styles.richTextTime}>2021 • 2 Temporadas</p>
            <p className={styles.richTextGenero}>Drama, Sci-Fi & Fantasy</p>
            <h5>
              After stealing the Tesseract during the events of “Avengers:
              Endgame,” an alternate version of Loki is brought to the
              mysterious Time Variance Authority, a bureaucratic organization
              that exists outside of time and space and monitors the timeline.
              They give Loki a choice...
            </h5>
          </div>
          <div className={styles.containerButton}>
            <div className={styles.contentButton}>
              <button className={styles.btnVerMais}>VER AGORA</button>
              <button className={styles.btnInfo}>Mais Informações</button>
            </div>
            <div className={styles.containerIcon}>
              <img src={IconAdd} alt="Icone Adicionar" />
              <img src={IconFavorito} alt="Icone Favorito" />
            </div>
          </div>

        </section>
      </div>
      <div className={styles.tituloCarousel}>Séries Bem Conceituadas</div>
      <div>
        {" "}
        <Carousel media="tv" category="top_rated" />{" "}
      </div>
    </>
  );
};

export default Serie;
