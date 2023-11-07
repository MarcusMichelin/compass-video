import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/stylesPage/Home.module.css";
import Header from "../components/Header";
import ImgBackgroundSeries from "../Components/BackgoundImage/Background Page Click/ImgBackgroundSeries";

interface Series {
  id: number;
  name: string;
  still_path: string;
  overview: string;
  runtime: number;
}

const PageTemporadas = () => {
  const [episodes, setEpisodes] = useState<Series[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/84958/season/1?api_key=8efe34f8767f6ed321c581e319415e89&language=en-US"
      );
      setEpisodes(response.data.episodes);
    };
    fetchEpisodes();
  }, []);

  return (
    <>
      <ImgBackgroundSeries />
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
        </div>
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
