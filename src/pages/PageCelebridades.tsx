import styles from "../styles/stylesPage/Home.module.css";
import IconAdd from "../assets/icons/add.svg";
import IconFavorito from "../assets/icons/favorito.svg";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { MovieDetails } from "../Typescript/MovieDetails";
import { useParams } from "react-router-dom";
import CarouselSimilar from "../Components/Carousel/CarouselSimilar.tsx";
import ImgBackgroundCelebridades from "../Components/BackgoundImage/Background Page Click/ImgBackgroundCelebridades.tsx";
import CarouselCredit from "../Components/Carousel/CarouselCredit.tsx";

interface MovieDetailsProps {
  moviesId: number;
  apiKey: string;
  biography: string;
  birthday: string;
}

const Person: React.FC<MovieDetailsProps> = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const { personId } = useParams<{ personId: string }>();

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
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, [personId]);

  if (!movieDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <ImgBackgroundCelebridades personId={Number(personId)} />
      <Header />
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>{movieDetails.name}</h2>
            <p className={styles.richTextTime}>{movieDetails.birthday}</p>
            <p className={styles.richTextGenero}>
              {movieDetails.genres &&
                movieDetails.genres.map((genre, index) => (
                  <span key={index}>
                    {genre.name}
                    {index !== movieDetails.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
            </p>
            <h5>{movieDetails.biography}</h5>
          </div>
          <div className={styles.containerButton}>
            <div className={styles.containerIcon}>
              <img src={IconAdd} alt="Icone Adicionar" />
              <img src={IconFavorito} alt="Icone Favorito" />
            </div>
          </div>
        </section>
      </div>
      <p className={styles.tituloCarouselFirst}>Faz Parte do Elenco</p>
      <CarouselCredit personId={Number(personId)} />
    </>
  );
};

export default Person;
