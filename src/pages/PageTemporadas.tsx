import styles from "../styles/stylesPage/Home.module.css";
import IconAdd from "../assets/icons/add.svg";
import IconFavorito from "../assets/icons/favorito.svg";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImgBackgroundSeries from "../Components/BackgoundImage/Background Page Click/ImgBackgroundSeries.tsx";
import axios from "axios";

interface MovieDetails {
  seasonId: number;
  apiKey: string;
}

interface Series {
  id: number;
  name: string;
  still_path: string;
  overview: string;
  runtime: number;
}

const PageTemporadas = () => {
  const [episodes, setEpisodes] = useState<Series[]>([]);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const { seasonId } = useParams<{ seasonId: string }>();

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${seasonId}/season/1?api_key=8efe34f8767f6ed321c581e319415e89&language=en-US`
      );
      setEpisodes(response.data.episodes);
    };
    fetchEpisodes();
  }, []);

  return (
    <>
      <ImgBackgroundSeries seasonId={Number(seasonId)} />
      <Header />
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>{movieDetails.name}</h2>
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
      <div className={styles.container}>
        <div className={styles.tituloCarousel}>Episódios</div>
        <div className={styles.episodes}>
          {episodes.map((episode) => (
            <div key={episode.id} className={styles.episodeCard}>
              <div className={styles.episodeCover}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
                />
              </div>
              <div className={styles.episodeInformation}>
                <h3>{episode.name}</h3>
                <p>{episode.runtime} min</p>
                <p>{episode.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageTemporadas;
