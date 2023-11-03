import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import axios from "axios";

interface Props {
    category: string;
    media: string;
}
interface Movie {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
}
const Carousel = ({ category, media }: Props) => {
   

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/${media}/${category}?api_key=8efe34f8767f6ed321c581e319415e89&language=en-US&page=1`
            );
            setMovies(response.data.results);
        };
        fetchMovies();
    }, [category, media]);

    return (
        <div>
            <Splide
                hasTrack={false}
                aria-label="Filmes em Alta"
                options={{
                    type: "loop",
                    perPage: 4,
                    perMove: 1,
                    gap: "1rem",
                    autoplay: true,
                    breakpoints: {
                        420: {
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
                    {movies.map((movie) => (
                        <SplideSlide key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                style={{ width: "100%", borderRadius: "0.5rem", marginBottom: '56px', marginTop: '16px' }}

                            />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </div>
    );
};

export default Carousel;

