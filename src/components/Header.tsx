import { useState } from "react";
import SearchInput from "./SearchInput";
// Styles
import styles from "../styles/Header.module.css";
// Icones
import logoCompassUOL from "../assets/icons/compass_uol_logo.svg";
import perfilUser from "../assets/icons/perfil.png";
import iconHome from "../assets/icons/home.svg";
import iconSeries from "../assets/icons/tv.svg";
import iconFilmes from "../assets/icons/movie.svg";
import iconCelebridades from "../assets/icons/star.svg";
import iconPlus from "../assets/icons/plus.svg";

const Header = () => {
  const [showMyList, setShowMyList] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const handleSearchClick = () => {
    setShowMyList(false);
    setShowFilter(true);
  };

  const handleShowMyList = () => {
    setShowMyList(true);
    setShowFilter(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src={logoCompassUOL}
            alt="Logo Compass.UOL"
            width={200}
            height={68}
          />
        </div>
        <div className={styles.searchBar}>
          <SearchInput
            onClick={handleSearchClick}
            setShowFilter={setShowFilter}
            showMyList={showMyList}
            handleShowMyList={handleShowMyList}
          />
          {showMyList && (
            <div>
              <ul className={styles.menuList}>
                <li className={styles.List}>
                  <img
                    className={styles.iconHover}
                    src={iconPlus}
                    alt="Icone Plus"
                    width={24}
                    height={24}
                  />
                  <a href="#" className={styles.listItemLink}>
                    Minha Lista
                  </a>
                </li>
              </ul>
            </div>
          )}
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
        <div className={styles.wrapper}>
          <nav className={styles.mainNavigation}>
            <ul className={styles.navigationList}>
              <li className={styles.listItem}>
                <img
                  className={styles.iconHover}
                  src={iconHome}
                  alt="Icone Home"
                  width={24}
                  height={24}
                />
                <a className={styles.navLink} href="/">
                  Início
                </a>
              </li>
              <li className={styles.listItem}>
                <img
                  className={styles.iconHover}
                  src={iconSeries}
                  alt="Icone Série"
                  width={24}
                  height={24}
                />
                <a className={styles.navLink} href="/series">
                  Série
                </a>
              </li>
              <li className={styles.listItem}>
                <img
                  className={styles.iconHover}
                  src={iconFilmes}
                  alt="Icone Filmes"
                  width={24}
                  height={24}
                />
                <a className={styles.navLink} href="/filmes">
                  Filmes
                </a>
              </li>
              <li className={`${styles.listItem} ${styles.centered}`}>
                <img
                  className={styles.iconHover}
                  src={iconCelebridades}
                  alt="Icone Celebridades"
                  width={24}
                  height={24}
                />
                <a className={styles.navLink} href="/celebridades">
                  Celebridades
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
