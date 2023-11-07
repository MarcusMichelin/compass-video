import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import axios from "axios";
import styles from "../../styles/Slider.module.css";

interface Props {
  category: string;
  media: string;
}
interface MediaInfo {
  id: number;
  poster_path: string;
  profile_path: string;
  title: string;
  release_date: string;
  media: Props["media"];
}
const Carousel = ({ category, media }: Props) => {
  const [medias, setMedias] = useState<MediaInfo[]>([]);

  useEffect(() => {
    const fetchMedias = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${media}/${category}?api_key=8efe34f8767f6ed321c581e319415e89&language=en-US&page=1`,
      );
      const mediasWithMediaProp = response.data.results.map((mediaInfo: MediaInfo) => ({
        ...mediaInfo,
        media,
      }));
      setMedias(mediasWithMediaProp);
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
          {medias.map((mediaInfo: MediaInfo) => (
            <SplideSlide key={mediaInfo.id}>
              <a href={`/home/${mediaInfo.media}/${mediaInfo.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    mediaInfo.poster_path || mediaInfo.profile_path
                  }`}
                  alt={mediaInfo.title}
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
