import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSeries from "../pages/PageSeries";
import PageCelebridades from "../pages/PageCelebridades";
import PageFilmes from "../pages/PageFilmes";
import Filmes from "../pages/Filmes";
import Home from "../pages/Home";
import IniciarSessao from "../Components/Login/IniciarSessao";
import Series from "../pages/Series";
import Celebridades from "../pages/Celebridades";
import PageTemporadas from "../pages/PageTemporadas";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IniciarSessao />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/home/movie" element={<Filmes />} />
      </Routes>
      <Routes>
        <Route path="/home/tv" element={<Series />} />
      </Routes>
      <Routes>
        <Route path="/home/person" element={<Celebridades />} />
      </Routes>
      <Routes>
        <Route path="/home/movie/:moviesId" element={<PageFilmes moviesId={0} apiKey={""} />} />
      </Routes>
      <Routes>
        <Route path="/home/tv/:seriesId" element={<PageSeries seriesId={0} apiKey={""}/>} />
      </Routes>
      <Routes>
        <Route path="/home/person/:personId" element={<PageCelebridades personId={0} apiKey={""} />} />
      </Routes>
      <Routes>
        <Route path="/home/:seriesId/season/:seasonId" element={<PageTemporadas seasonId={0} apiKey={""} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
