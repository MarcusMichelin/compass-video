import React, { useState } from "react";

// Styles
import styles from "../styles/SearchInput.module.css";
// Icones
import iconSearch from "../assets/icons/serach.svg";
import FilterSearch from "../assets/icons/serach.svg";
import FilterClose from "../assets/icons/close.svg";

type ItemType = "Filmes" | "Séries" | "Celebridades";

interface SearchInputProps {
  onClick: () => void;
  setShowFilter: (value: boolean) => void;
  handleShowMyList: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onClick,
  setShowFilter,
  handleShowMyList,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<ItemType | null>();
  const [showFilter, setShowFilterState] = useState<boolean>(false);

  const handleInputClick = () => {
    onClick();
    setShowFilterState(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as ItemType;
    setSelectedFilter(selectedValue);
    setShowFilterState(false);
    setShowFilter(false);
  };

  const handleCloseFilter = () => {
    setShowFilterState(false);
    handleShowMyList();
  };

  return (
    <div className={styles.StyleShowSelect}>
      {showFilter ? (
        <div className={styles.StylesContentShowSelect}>
          <input
            className={styles.searchInputBusca}
            type="text"
            placeholder="Filme, série ou celebridade"
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={handleInputClick}
          />
          <div className={styles.StyleSelectIcons}>
            <select
              className={styles.StyleSelect}
              value={selectedFilter || ""}
              onChange={handleFilterChange}
            >
              <option value="Filmes">Filmes</option>
              <option value="Séries">Séries</option>
              <option value="Celebridades">Celebridades</option>
            </select>
            <div className={styles.contentIcons}>
              <img src={FilterSearch} alt="Icone Pesquisa" />
              <img
                src={FilterClose}
                alt="Icone Fechar"
                onClick={handleCloseFilter}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.contentsearchBar}>
          <img src={iconSearch} alt="Icone Lupa" width={24} height={24} />
          <input
            className={styles.searchInput}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onClick={handleInputClick}
            placeholder="Buscar"
          />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
