import "./App.css";
import Header from "./Components/Header";
import TopBar from "./Components/TopBar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import './index.css'



function App() {
  return (
    <>
      <div>
        <TopBar />
        <Header />
        {/* ////// */}
      </div>
      <div style={{color: 'black', fontSize: 20, fontFamily: 'Work Sans', fontWeight: '700', wordWrap: 'break-word'}}>Filmes Mais Bem Conceituados</div>
        <Carousel media='movie' category="top_rated"  />
        <Carousel media='tv' category="top_rated"  />
        <Carousel media='movie' category="popular"  />
        <Carousel media='tv' category="popular"  />
        <Carousel media='movie' category="upcoming"  />
        <Carousel media='tv' category="airing_today"  />
        <Carousel media='person' category="popular"  />
      <div><Footer /></div>
    </>
  );
}

export default App;
