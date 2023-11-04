import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSeries from "../pages/PageSeries";
import PageCelebridades from "../pages/PageCelebridades";
import PageFilmes from "../pages/PageFilmes";
import Filmes from "../pages/Filmes";

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
        <Route path="/filmes" element={<Filmes />} />
      </Routes>
      <Routes>
        <Route
          path="/home/:movieId"
          element={<PageFilmes movieId={0} apiKey={""} />}
        />
      </Routes>
      <Routes>
        <Route path="/celebridades" element={<PageCelebridades />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
