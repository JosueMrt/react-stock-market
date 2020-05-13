import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className={styles.container}>
      <input onChange={(e) => handleSearch(e)} type="text" />
    </div>
  );
};

export default SearchBar;
