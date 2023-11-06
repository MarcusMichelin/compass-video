
  import { useState } from "react";
  import axios from "axios";
  import Card from "./Card";
  import ButtonIniciarSessao from "./ButtonIniciarSessao";
  import styles from "./IniciarSessao.module.css";
  import BackgroundLogin from '../../assets/icons/LoginBackground.png'
  import imagemCompassUol from '../../assets/icons/compass_uol_logo.svg'

  function IniciarSessao() {
    const [requestToken, setRequestToken] = useState("");
    const [sessionId, setSessionId] = useState("");

    const obterRequestToken = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/authentication/token/new",
        {
          params: {
            api_key: "8efe34f8767f6ed321c581e319415e89",
          },
        }
      );
      setRequestToken(response.data.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=http://localhost:5174/home/`;
    };

    const obterSessionId = async () => {
      const response = await axios.post(
        "https://api.themoviedb.org/3/authentication/session/new",
        {
          request_token: requestToken,
        },
        {
          params: {
            api_key: "8efe34f8767f6ed321c581e319415e89",
          },
        }
      );
      setSessionId(response.data.session_id);
      localStorage.setItem("sessionId", response.data.session_id);
    };

    const getSessionId = () => {
      const sessionId = localStorage.getItem("sessionId");
      if (sessionId) {
        setSessionId(sessionId);
      }
    };

    return (
      <div className={styles.container}>
        <img src={BackgroundLogin} alt="" height={982} width={1512} />

        <Card>
          <div className={styles.titulo}>
            <h2>Compass Video</h2>
          </div>

          <div className={styles.texto}>
            <p>Acesse sua conta para ver nossos titulos</p>
          </div>

          <div className={styles.contentBtn}>
            <ButtonIniciarSessao onClick={obterRequestToken} />
          </div>

          <div className={styles.convidado}>
            <p>
              Não tem conta? <span>Acesse como Convidado</span>
            </p>
          </div>

          <div className={styles.compassLogo}>
            <img src={imagemCompassUol} alt="" width={330} height={112.953} />
          </div>
        </Card>
      </div>
    );
  }

  export default IniciarSessao;


