import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import "./index.css";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <>
      <div>
        <TopBar />
        <AppRouter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
