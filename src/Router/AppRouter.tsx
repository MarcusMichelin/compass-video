import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSeries from "../pages/Series";
import PageCelebridades from "../pages/Celebridades";
import PageFilmes from "../pages/PageFilmes";
import Filmes from "../pages/Filmes";
import Home from "../pages/Home";
import IniciarSessao from "../Components/Login/IniciarSessao";

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
        <Route path="/series" element={<PageSeries />} />
      </Routes>
      <Routes>
        <Route path="/home/filmes" element={<Filmes />} />
      </Routes>
      <Routes>
        <Route path="/celebridades" element={<PageCelebridades />} />
      </Routes>
      <Routes>
        <Route path="/filmes/:movieId" element={<PageFilmes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
