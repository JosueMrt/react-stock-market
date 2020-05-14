import React from "react";
import styles from "./SearchBar.module.css";
import { Autocomplete } from "@material-ui/lab";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const stocks = ["twtr", "tsla"];
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.container}>
      <Autocomplete
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        id="search-bar"
        options={stocks}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Controllable" variant="outlined" />
        )}
      />
      <Button
        onClick={() => handleSearch(inputValue)}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
};

export default SearchBar;
