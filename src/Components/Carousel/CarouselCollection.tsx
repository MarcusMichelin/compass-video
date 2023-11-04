import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import axios from "axios";
import styles from "../../styles/Slider.module.css";

interface Props {
  searchTerm: string;
}

interface Collection {
  id: number;
  name: string;
  poster_path: string;
}

const CarouselCollection = ({ searchTerm }: Props) => {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/collection?api_key=8efe34f8767f6ed321c581e319415e89&language=en-US&query=${searchTerm}`
      );
      const filteredCollections = response.data.results.filter(
        (collection: Collection) => collection.poster_path !== null
      );
      setCollections(filteredCollections);
    };
    fetchCollections();
  }, [searchTerm]);

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
          {collections.map((collection) => (
            <SplideSlide key={collection.id}>
              <a href={`/home/${collection.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${collection.poster_path}`}
                  alt={collection.name}
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

export default CarouselCollection;
