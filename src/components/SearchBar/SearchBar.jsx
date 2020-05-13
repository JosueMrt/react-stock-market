import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useEffect } from "react";

const SearchBar = ({ handleSearch }) => {
  const [formValue, setFormValue] = useState("");
  useEffect(() => {
  }, [formValue]);
  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(formValue);
        }}
      >
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SearchBar;
