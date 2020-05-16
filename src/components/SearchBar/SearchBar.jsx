import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { Autocomplete } from "@material-ui/lab";
import { TextField, Button } from "@material-ui/core";
import { fetchTickerList } from "../../api";

const SearchBar = ({ handleSearch }) => {
  const [stocks, setStocks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetch = async () => setStocks(await fetchTickerList(inputValue));
    inputValue.length > 0 && fetch();
  }, [inputValue]);

  return (
    <div className={styles.container}>
      <Autocomplete
        inputValue={inputValue}
        onInputChange={(event, newInputValue) =>
          setInputValue(newInputValue.toUpperCase())
        }
        id="search-bar"
        options={stocks}
        freeSolo={true}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Pick a stock" variant="outlined" />
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
