import { useEffect, useState } from "react";
import styles from "../../../styles/stylesPage/backgroundInicio.module.css";
import { useParams } from "react-router-dom";

interface Serie {
  title: string | undefined;
  backdrop_path: string;
}

const ImgBackgroundSeries = () => {
  const [serieDetails, setSerieDetails] = useState<Serie | null>(null);
  const { seriesId } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`, {
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
        setSerieDetails(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, [seriesId]);

  if (!serieDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles["gradient-overlay"]}></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${serieDetails.backdrop_path}`}
          alt={serieDetails.title}
          width={430}
          height={967}
        />
      </div>
    </>
  );
};

export default ImgBackgroundSeries;
