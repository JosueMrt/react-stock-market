import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { fetchTickerList } from "../../api";
import { Autocomplete } from "@material-ui/lab";
import { TextField, Button } from "@material-ui/core";

const SearchBar = ({ handleSearch }) => {
  const [stocks, setStocks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetch = async () => setStocks(await fetchTickerList());
    fetch();
  }, []);

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
