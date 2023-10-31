import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import axios from "axios";

const Carousel = () => {
    interface Movie {
        id: number;
        poster_path: string;
        title: string;
        release_date: string;
    }

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=8efe34f8767f6ed321c581e319415e89&language=en-US&page=1"
            );
            setMovies(response.data.results);
        };
        fetchMovies();
    }, []);

    return (
        <Splide
            options={{
                type: "loop",
                perPage: 4,
                perMove: 1,
                gap: "1rem",
                autoplay: true,
                pauseOnHover: true,
                breakpoints: {
                    640: {
                        perPage: 1,
                        gap: "0.5rem",
                    },
                    768: {
                        perPage: 2,
                        gap: "1rem",
                    },
                    1024: {
                        perPage: 3,
                        gap: "1.5rem",
                    },
                },
            }}
        >
            {movies.map((movie) => (
                <SplideSlide key={movie.id}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <h3 className="text-lg font-medium mt-2">{movie.title}</h3>
                    <p className="text-sm text-gray-500">{movie.release_date}</p>
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default Carousel;
