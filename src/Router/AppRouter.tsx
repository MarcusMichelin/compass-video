import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSeries from "../pages/PageSeries";
import PageCelebridades from "../pages/PageCelebridades";
import Filmes from "../pages/PageFilmes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
      </Routes>
      <Routes>
        <Route path="/series" element={<PageSeries />} />
      </Routes>
      <Routes>
        <Route path="/home/:movieId" element={<Filmes />} />
      </Routes>
      <Routes>
        <Route path="/celebridades" element={<PageCelebridades />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
