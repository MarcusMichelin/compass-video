import styles from "../styles/Header.module.css";
import logoCompassUOL from "../assets/icons/compass_uol_logo.svg";
import perfilUser from "../assets/icons/perfil.png";
import iconSearch from "../assets/icons/serach.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logoCompassUOL} alt="Logo Compass.UOL" />
      </div>
      <div className={styles.searchBar}>
        <div className={styles.contentsearchBar}>
          <img src={iconSearch} alt="Icone Lupa" width={24} height={24} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar"
          />
        </div>
        <div>
          <ul className={styles.menuList}>
            <li>
              <a href="#" className={styles.listItemLink}>
                Minha Lista
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.userProfile}>
          <img
            src={perfilUser}
            className={styles.userProfileImage}
            alt="Perfil Usuario"
            width={48}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
