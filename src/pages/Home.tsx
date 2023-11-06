import styles from "../styles/stylesPage/Home.module.css";
import IconAdd from "../assets/icons/add.svg";
import IconFavorito from "../assets/icons/favorito.svg";
import Header from "../components/Header";
import ImgBackgroundHome from "../components/backgoundImagem/ImgBackgroundHome";
import Carousel from "../components/Carousel/Carousel";
import CarouselCollection from "../components/Carousel/CarouselCollection";

const Home = () => {
  return (
    <>
      <ImgBackgroundHome />
      <Header />
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Five Nights at Freddy's</h2>
            <p className={styles.richTextTime}>2021 • 1 h 41 min</p>
            <p className={styles.richTextGenero}>Drama, Sci-Fi & Fantasy</p>
            <h5>
              Recently fired and desperate for work, a troubled young man named
              Mike agrees to take a position as a night security guard at an
              abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon
              discovers that nothing at Freddy's is what it seems.
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
      <div className={styles.containerCarosuel}>
        <div className={styles.tituloCarouselFirst}>Coleções de Halloween</div>
        <div>
          {" "}
          <CarouselCollection searchTerm="horror" />
        </div>
        <div className={styles.tituloCarousel}>Filmes Bem Conceituados</div>
        <div>
          {" "}
          <Carousel media="movie" category="top_rated" />
        </div>
        <div className={styles.tituloCarousel}>Séries Bem Conceituadas</div>
        <div>
          {" "}
          <Carousel media="tv" category="top_rated" />{" "}
        </div>
        <div className={styles.tituloCarousel}>
          Atores e Atrizes Bem Conceituados
        </div>
        <div>
          {" "}
          <Carousel media="person" category="popular" />
        </div>
      </div>
    </>
  );
};

export default Home;
