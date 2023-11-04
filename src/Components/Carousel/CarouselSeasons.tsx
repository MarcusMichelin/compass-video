import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import axios from "axios";
import styles from "../../styles/Slider.module.css";

interface Props {
  serieId: number;
}

interface Season {
  id: number;
  poster_path: string;
  name: string;
  overview: string;
}

const CarouselSeason = ({ serieId }: Props) => {
  const [seasons, setSeasons] = useState<Season[]>([]);

  useEffect(() => {
    const fetchSeasons = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${serieId}?api_key=8efe34f8767f6ed321c581e319415e89&language=en-US`
      );
      setSeasons(response.data.seasons);
    };
    fetchSeasons();
  }, [serieId]);

  return (
    <div className={styles.containerSlider}>
      <Splide
        hasTrack={false}
        aria-label="Carrossel"
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          gap: "1rem",
          autoplay: true,
          breakpoints: {
            430: {
              perPage: 2,
              gap: "0.5rem",
            },
            1512: {
              perPage: 6,
              gap: "1rem",
            },
          },
        }}
      >
        <SplideTrack>
          {seasons.map((season) => (
            <SplideSlide key={season.id}>
              <a href={`/serie/${serieId}/season/${season.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                  alt={season.name}
                  style={{
                    width: "100%",
                    borderRadius: "0.5rem",
                    marginBottom: "56px",
                    marginTop: "16px",
                  }}
                />
              </a>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default CarouselSeason;
