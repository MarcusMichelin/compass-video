import Header from "../../components/Header";
import styles from "../../styles/stylesPage/MinhaLista.module.css";

const MinhaLista = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <h1>Minha Lista</h1>
          <p>Listas criadas por você de acordo com seus gostos</p>
        </div>
        <div className={styles.contentFilmes}>
          <h5>Filmes Favoritos</h5>
          {/* carosuel img  */}
        </div>
        <div className={styles.contentSeries}>
          <h5>Séries favoritas</h5>
          {/* carosuel img  */}
        </div>
        <div className={styles.contentFilmes}>
          <h5>Filmes para ver mais tarde</h5>
          {/* carosuel img  */}
        </div>
        <div className={styles.contentSeries}>
          <h5>Séries para ver mais tarde</h5>
          {/* carosuel img  */}
        </div>
      </div>
    </>
  );
};

export default MinhaLista;
