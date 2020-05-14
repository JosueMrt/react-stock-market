import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ handleSearch }) => {
  const [formValue, setFormValue] = useState("");

  const handleChange = (e) => {
    e.target.value.length <= 5
      ? setFormValue(e.target.value)
      : setFormValue(formValue);
  };
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
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SearchBar;
