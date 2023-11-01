import "./App.css";
import Header from "./Components/Header";
import TopBar from "./Components/TopBar";
import Carousel from "./Components/Carousel";
import './index.css'


function App() {
  return (
    <>
      <div>
        <TopBar />
        <Header />
      </div>
      <div style={{background: 'linear-gradient(180deg, rgba(26, 29, 41, 0) 0%, rgba(26, 29, 41, 0.79) 60%, #1A1D29 100%)',}}>
      <div className="text-stone-600 text-4x5 font-work-sans font-bold break-words">Filmes bem Conceituados</div>
        <Carousel media='movie' category="top_rated"  />
        <Carousel media='tv' category="top_rated"  />
        <Carousel media='movie' category="popular"  />
        <Carousel media='tv' category="popular"  />
        <Carousel media='movie' category="upcoming"  />
        <Carousel media='tv' category="airing_today"  />
        <Carousel media='person' category="popular"  />
      </div>
    </>
  );
}

export default App;
