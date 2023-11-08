import React, { useState } from "react";
import axios from "axios";

// Styles
import styles from "../styles/SearchInput.module.css";
// Icones
import iconSearch from "../assets/icons/serach.svg";
import FilterSearch from "../assets/icons/serach.svg";
import FilterClose from "../assets/icons/close.svg";

type ItemType = "movie" | "tv" | "person" | "collection";

interface SearchInputProps {
  onClick: () => void;
  setShowFilter: (value: boolean) => void;
  handleShowMyList: () => void;
}

interface SearchResult {
  id: number;
  title: string;
  poster_path: string;
  profile_path: string;
  media_type: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onClick,
  setShowFilter,
  handleShowMyList,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<ItemType | null>();
  const [showFilter, setShowFilterState] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  const handleInputClick = () => {
    // handleSearchRedirect();
    onClick();
    setShowFilterState(true);
  };

  // const handleSearchRedirect = () => {
  //   if (location.pathname !== "/buscar") {
  //     window.location.href = "/buscar";
  //   } else {
  //     console.log("Você já está na página de busca.");
  //   }
  // };

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
    if (event.target.value) {
      const results = await searchTMDB(
        event.target.value,
        selectedFilter || null,
      );
      setSearchResult(results.length > 0 ? results[0] : null);
    } else {
      setSearchResult(null);
    }
  };

  const handleFilterChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedValue = event.target.value as ItemType;
    setSelectedFilter(selectedValue);
    setShowFilterState(false);
    setShowFilter(false);
    if (searchQuery) {
      const results = await searchTMDB(searchQuery, selectedValue);
      setSearchResult(results.length > 0 ? results[0] : null);
    }
  };

  const handleCloseFilter = () => {
    setShowFilterState(false);
    handleShowMyList();
  };

  const searchTMDB = async (query: string, filter: ItemType | null) => {
    const mediaType = filter?.toLowerCase() || "multi";
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/${mediaType}?api_key=8efe34f8767f6ed321c581e319415e89&query=${query}`,
    );
    return response.data.results;
  };

  return (
    <>
      <div className={styles.StyleShowSelect}>
        {showFilter ? (
          <div className={styles.StylesContentShowSelect}>
            <input
              className={styles.searchInputBusca}
              type="text"
              placeholder="Filme, série ou celebridade"
              onChange={handleInputChange}
              onClick={handleInputClick}
            />
            <div className={styles.StyleSelectIcons}>
              <select
                className={styles.StyleSelect}
                value={selectedFilter || ""}
                onChange={handleFilterChange}
              >
                <option value="movie">Filmes</option>
                <option value="tv">Séries</option>
                <option value="person">Celebridades</option>
                <option value="collection">Coleções</option>
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
    </>
  );
};

export default SearchInput;
