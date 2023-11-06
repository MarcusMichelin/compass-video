
import ButtonIniciarSessao from './ButtonIniciarSessao'
import Card from './Card'
import styles from './IniciarSessao.module.css';
import BackgroundLogin from '../../assets/icons/LoginBackground.png'
import imagemCompassUol from '../../assets/icons/compass_uol_logo.svg'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';


function IniciarSessao(){

const [sessionID, setSessionID] = useState(null);


    const obterToken = async () => {
        try {
        
      


          const response = await axios.get('https://api.themoviedb.org/3/authentication/token/new', {
            params: {
              api_key: '8efe34f8767f6ed321c581e319415e89',
              
            },

           
          });
    
          const { request_token } = response.data;
          console.log('Token de Solicitação:', request_token);
    
       
          window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:5173/`;
        } catch (error) {
          console.error('Erro ao obter token:', error);
        }
      };



      const criarSessao = async (requestToken: any) => {
        try {
          
          const response = await axios.post('https://api.themoviedb.org/3/authentication/session/new', {
            api_key: '8efe34f8767f6ed321c581e319415e89',
            request_token: requestToken,
          });
    
          const { session_id } = response.data;
          setSessionID(session_id);


          
          
          
        } catch (error) {
          console.error('Erro ao criar sessão:', error);
        }
      };


      useEffect(() => {
      
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
    
        if (params.request_token) {
        
          criarSessao(params.request_token);
        }
      }, []);








    return(

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
    <ButtonIniciarSessao onClick={obterToken} />
    </div>

    <div className={styles.convidado}>
    <p>Não tem conta? <span>Acesse como Convidado</span></p>
    </div>


<div className={styles.compassLogo}>

    <img src={imagemCompassUol} alt="" width={330} height={112.953} />

</div>
    

</Card>

</div>
)

}

export default IniciarSessao