import styles from "../styles/Footer.module.css";
import logoCompassUOL from "../assets/icons/compass_uol_logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.LogoFooter}>
            <img src={logoCompassUOL} alt="Logo Compass UOL" />
          </div>
          <div className={styles.divStyle}>
            <ul className={styles.ulStyle}>
              <div className={styles.firstRow}>
                <li className={styles.liStyle}>
                  <a className={styles.linkStyle} href="">
                    Política de privacidad
                  </a>
                </li>
                <li className={styles.liStyle}>
                  <a className={styles.linkStyle} href="">
                    Acuerdo de suscripción
                  </a>
                </li>
                <li className={styles.liStyle}>
                  <a className={styles.linkStyle} href="">
                    Ayuda
                  </a>
                </li>
              </div>
              <div className={styles.secondRow}>
                <li className={styles.liStyle}>
                  <a className={styles.linkStyle} href="">
                    Dispositivos compatible
                  </a>
                </li>
                <li className={styles.liStyle}>
                  <a className={styles.linkStyle} href="">
                    Acerca de Disney+
                  </a>
                </li>
                <li className={styles.liStyle}>
                  <a className={styles.linkStyle} href="">
                    Publicidad personalizada
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div className={styles.richText}>
            <h3>
              Disney+ es un servicio por suscripción de pago, su contenido está
              sujeto a disponibilidad. El servicio Disney+ es comercializado por
              Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
            </h3>
          </div>
          <div className={styles.richTextDisney}>
            <h3>© Disney. Todos los derechos reservados.</h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
