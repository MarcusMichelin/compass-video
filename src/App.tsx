import "./App.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import "./index.css";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <>
      <div>
        <TopBar />
        <Header />
        {/* ////// */}
        <AppRouter />
      </div>
      <div
        style={{
          color: "black",
          fontSize: 20,
          fontFamily: "Work Sans",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Filmes Mais Bem Conceituados
      </div>
      <Carousel media="movie" category="top_rated" />
      <Carousel media="tv" category="top_rated" />
      <Carousel media="movie" category="popular" />
      <Carousel media="tv" category="popular" />
      <Carousel media="movie" category="upcoming" />
      <Carousel media="tv" category="airing_today" />
      <Carousel media="person" category="popular" />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
