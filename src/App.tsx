import "./App.css";

import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import AppRouter from "./Router/AppRouter";
import styles from "./styles/stylesPage/backgroundInicio.module.css";

function App() {
  return (
    <>
      <div className="container">
        <TopBar />
        <div className={styles["gradient-overlay"]}></div>
        {/* ////// */}
        <AppRouter />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
