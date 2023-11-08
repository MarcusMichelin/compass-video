import styles from "../styles/stylesPage/Home.module.css";
import IconAdd from "../assets/icons/add.svg";
import IconFavorito from "../assets/icons/favorito.svg";
import Header from "../components/Header";
import Carousel from "../components/Carousel/Carousel";
import BackgroundPersonHeader from "../Components/BackgoundImage/Background Page Header/BackgroundPersonHeader";
const Celebridades = () => {
  return (
    <>
      <BackgroundPersonHeader />
      <Header />
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>The Other Zoey</h2>
            <p className={styles.richTextTime}>2021 • 1 h 41 min</p>
            <p className={styles.richTextGenero}>Drama, Sci-Fi & Fantasy</p>
            <h5>
              Zoey Miller, a super smart computer major uninterested in romantic
              love, has her life turned upside down when Zack, the school’s
              soccer star, gets amnesia and mistakes Zoey for his girlfriend.
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
      <div className={styles.tituloCarouselFirst}>
        Celebridades Populares
      </div>
      <div>
        {" "}
        <Carousel media="person" category="popular" />
      </div>
    </>
  );
};

export default Celebridades;
