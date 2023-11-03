import "./App.css";
import TopBar from "./components/TopBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import AppRouter from "./Router/AppRouter";
// import IniciarSessao from "./components/Login/IniciarSessao";

function App() {
  return (
    <>
      <div className="container">
        <TopBar />
        {/* ////// */}
        <AppRouter />
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(26, 29, 41, 0) 0%, rgba(26, 29, 41, 0.79) 60%, #1A1D29 100%)",
        }}
      >
        <div className="text-stone-600 text-4x5 font-work-sans font-bold break-words">
          Filmes bem Conceituados
        </div>
        <Carousel media="movie" category="top_rated" />
        <Carousel media="tv" category="top_rated" />
        <Carousel media="movie" category="popular" />
        <Carousel media="tv" category="popular" />
        <Carousel media="movie" category="upcoming" />
        <Carousel media="tv" category="airing_today" />
        <Carousel media="person" category="popular" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
