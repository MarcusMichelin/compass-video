import Header from "../components/Header";
import styles from "../styles/stylesPage/Home.module.css";
import IconAdd from "../assets/icons/add.svg";
import IconFavorito from "../assets/icons/favorito.svg";
import ImgBackgroundFilme from "../components/backgoundImagem/ImgBackgroundFilmes";
import Carousel from "../components/Carousel/Carousel";

const Filmes = () => {
  return (
    <>
      <ImgBackgroundFilme />
      <Header />
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>The Nun II</h2>
            <p className={styles.richTextTime}>2021 • 1 h 41 min</p>
            <p className={styles.richTextGenero}>Drama, Sci-Fi & Fantasy</p>
            <h5>
              In 1956 France, a priest is violently murdered, and Sister Irene
              begins to investigate. She once again comes face-to-face with a
              powerful evil.
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
        <div>
          <Carousel media="movie" category="top_rated" />
        </div>
      </div>
    </>
  );
};

export default Filmes;
