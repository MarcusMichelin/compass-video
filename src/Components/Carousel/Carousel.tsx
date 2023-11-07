import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import axios from "axios";
import styles from "../../styles/Slider.module.css";

interface Props {
  category: string;
  media: string;
}
interface Media {
  id: number;
  poster_path: string;
  profile_path: string;
  title: string;
  release_date: string;
}
const Carousel = ({ category, media }: Props) => {
  const [medias, setMedias] = useState<Media[]>([]);

  useEffect(() => {
    const fetchMedias = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${media}/${category}?api_key=8efe34f8767f6ed321c581e319415e89&language=en-US&page=1`,
      );
      setMedias(response.data.results);
    };
    fetchMedias();
  }, [category, media]);
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
              gap: "1.25rem",
            },
          },
        }}
      >
        <SplideTrack>
          {medias.map((media) => (
            <SplideSlide key={media.id}>
              <a href={`/home/${media.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    media.poster_path || media.profile_path
                  }`}
                  alt={media.title}
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

export default Carousel;
