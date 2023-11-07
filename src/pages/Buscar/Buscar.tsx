import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import styles from "../../styles/stylesPage/Buscar.module.css";

const Buscar = () => {
  const location = useLocation();
  const searchResult = location.state?.searchResult || null;

  return (
    <>
      <div className={styles.container}>
        <Header />
      </div>
      <div>
        {searchResult &&
          searchResult.map((item) => (
            <ul key={item.id}>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w92${
                    item.poster_path || item.profile_path
                  }`}
                  alt={item.title || item.name}
                />
              </li>
            </ul>
          ))}
      </div>
    </>
  );
};

export default Buscar;
