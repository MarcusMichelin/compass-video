
import ButtonIniciarSessao from './ButtonIniciarSessao'
import Card from './Card'
import styles from './IniciarSessao.module.css';
import BackgroundLogin from '../../assets/icons/LoginBackground.png'
import imagemCompassUol from '../../assets/icons/compass_uol_logo.svg'


function IniciarSessao(){

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
    <ButtonIniciarSessao />
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