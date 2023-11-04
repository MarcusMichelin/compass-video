import styles from "../styles/stylesPage/Home.module.css";
import IconAdd from "../assets/icons/add.svg";
import IconFavorito from "../assets/icons/favorito.svg";
import Header from "../components/Header";
import ImgBackground from "../components/backgoundImagem/ImgBackground";
import CarouselTemporadas from "../components/Carousel/CarouselSeasons";

const Home = () => {
  return (
    <>
      <ImgBackground />
      <Header />
      <div className={styles.container}>
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
          <div className={styles.tituloCarousel}>Temporadas</div>
          <div> <CarouselTemporadas serieId={84958} /></div> 
          {/* Alterar o número da serieId para o id da série que deseja ver as temporadas */}
        </div>
      </div>
    </>
  );
};

export default Home;
