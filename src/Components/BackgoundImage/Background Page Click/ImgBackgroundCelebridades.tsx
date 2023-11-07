import { useEffect, useState } from "react";
import styles from "../../../styles/stylesPage/backgroundInicio.module.css";
import { useParams } from "react-router-dom";

interface Person {
  title: string | undefined;
  backdrop_path: string;
  profile_path: string;
}

const ImgBackgroundCelebridades = () => {
  const [personDetails, setPersonDetails] = useState<Person | null>(null);
  const { personId } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${personId}?language=en-US`, {
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
        setPersonDetails(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, [personId]);

  if (!personDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles["gradient-overlay"]}></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${personDetails.profile_path}`}
          alt={personDetails.title}
          width={430}
          height={967}
        />
      </div>
    </>
  );
};

export default ImgBackgroundCelebridades;
