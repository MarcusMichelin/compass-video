import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSeries from "../pages/Series";
import PageCelebridades from "../pages/Celebridades";
import PageFilmes from "../pages/PageFilmes";
import Filmes from "../pages/Filmes";
import Home from "../pages/Home";
import IniciarSessao from "../Components/Login/IniciarSessao";
import Series from "../pages/Series";
import Celebridades from "../pages/Celebridades";

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
        <Route path="/series" element={<Series />} />
      </Routes>
      <Routes>
        <Route path="/filmes" element={<Filmes />} />
      </Routes>
      <Routes>
        <Route path="/celebridades" element={<Celebridades />} />
      </Routes>
      <Routes>
        <Route path="/home/:moviesId" element={<PageFilmes movieId={0} apiKey={""} />} />
      </Routes>
      <Routes>
        <Route path="/home/:seriesId" element={<PageSeries seriesId={0} apiKey={""} />} />
      </Routes>
      <Routes>
        <Route path="/home/:seriesId/season/seasonId" element={<PageSeries seasonId={0} apiKey={""} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
