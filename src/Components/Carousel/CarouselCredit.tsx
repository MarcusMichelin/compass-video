import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import axios from "axios";

interface Props {
    personId: number;
}

interface Credit {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
}

const CarouselCredit = ({ personId }: Props) => {
    const [credits, setCredits] = useState<Credit[]>([]);

    useEffect(() => {
        const fetchCredits = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=8efe34f8767f6ed321c581e319415e89&language=en-US&append_to_response=crew`
            );
            setCredits(response.data.cast.concat(response.data.crew));
        };
        fetchCredits();
    }, [personId]);

    return (
        <div>
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
                    {credits.map((credit) => (
                        <SplideSlide key={credit.id}>
                            <a href={`/home/${credit.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${credit.poster_path}`}
                                    alt={credit.title}
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

export default CarouselCredit;
