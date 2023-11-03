import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSeries from "../pages/PageSeries";
import PageFilmes from "../pages/PageFilmes";
import PageCelebridades from "../pages/PageCelebridades";

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
        <Route path="/filmes" element={<PageFilmes />} />
      </Routes>
      <Routes>
        <Route path="/celebridades" element={<PageCelebridades />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
