import styles from "./ButtonIniciarSessao.module.css";

function ButtonIniciarSessao({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.botao}>
        INICIAR SESSÃO COM TMDB
      </button>
    </div>
  );
}

export default ButtonIniciarSessao;
