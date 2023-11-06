import "./App.css";
import Header from "./components/Header";
import IniciarSessao from "./components/Login/IniciarSessao";
import TopBar from "./components/TopBar";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer";
import "./index.css";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <>
      <div>
         <IniciarSessao /> 

      {/*  <TopBar /> */}
        {/* <Header /> */}
        {/* ////// */}
       {/* <AppRouter /> /*}
      </div>
      {/* <Carousel media="movie" category="top_rated" />
      
      <Carousel media="movie" category="popular" />
      <Carousel media="tv" category="popular" />
      <Carousel media="movie" category="upcoming" />
      <Carousel media="tv" category="airing_today" />
       */}
     {/* <div> */} 
       { /*<Footer /> */} 
      </div>
    </>
  );
}

export default App;
