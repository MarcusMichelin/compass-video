import styles from "../styles/stylesPage/Home.module.css";
import IconAdd from "../assets/icons/add.svg";
import IconFavorito from "../assets/icons/favorito.svg";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { MovieDetails } from "../Typescript/MovieDetails";
import { useParams } from "react-router-dom";
import CarouselSimilar from "../Components/Carousel/CarouselSimilar.tsx";
import CarouselSeason from "../Components/Carousel/CarouselSeasons.tsx";
import ImgBackgroundSeries from "../Components/BackgoundImage/Background Page Click/ImgBackgroundSeries.tsx";

interface MovieDetailsProps {
  seriesId: number;
  apiKey: string;
}

const PageSeries: React.FC<MovieDetailsProps> = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const { serieId } = useParams<{ serieId: string }>();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${serieId}?language=en-US`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWZlMzRmODc2N2Y2ZWQzMjFjNTgxZTMxOTQxNWU4OSIsInN1YiI6IjY1NDExN2RkNmNhOWEwMDBhZDcyM2EyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLTKmbMcdBw2Q4hQDoYLglPZwqQCawWYg07IDIHbpf0",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, [serieId]);

  if (!movieDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <ImgBackgroundSeries serieId={Number(serieId)} />
      <Header />
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>{movieDetails.original_title}</h2>
            <p className={styles.richTextTime}>{movieDetails.release_date}</p>
            <p className={styles.richTextGenero}>
              {movieDetails.genres &&
                movieDetails.genres.map((genre, index) => (
                  <span key={index}>
                    {genre.name}
                    {index !== movieDetails.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
            </p>
            <h5>{movieDetails.overview}</h5>
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
      <p className={styles.tituloCarousel}>Similares</p>
      <CarouselSimilar media="tv" currentMediaId={Number(serieId)} />
      <CarouselSeason serieId={Number(serieId)} />
    </>
  );
};

export default PageSeries;
