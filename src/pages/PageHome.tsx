import styles from "../styles/stylesPage/Home.module.css";
import IconAdd from "../assets/icons/add.svg";
import IconFavorito from "../assets/icons/favorito.svg";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Five Nights at Freddy's</h2>
          <p>2021 • 1 h 41 min</p>
          <h5>
            Recently fired and desperate for work, a troubled young man named
            Mike agrees to take a position as a night security guard at an
            abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon
            discovers that nothing at Freddy's is what it seems.
          </h5>
        </div>
        <div>
          <button className={styles.btnVerMais}>VER AGORA</button>
          <button className={styles.btnInfo}>Mais Informações</button>
          <div>
            <img src={IconAdd} alt="Icone Adicionar" />
            <img src={IconFavorito} alt="Icone Favorito" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
