import React, { useState } from "react";
import { Chart, Info, News, SearchBar, Price } from "./components";
import styles from "./App.module.css";

const App = () => {
  const [ticker, setTicker] = useState("TSLA");
  const handleSearch = (ticker) => {
    setTicker(ticker);
  };
  return (
    <div className={styles.container}>
      <SearchBar handleSearch={handleSearch} />
      <Info ticker={ticker} />
      <Chart ticker={ticker} />
      <Price ticker={ticker} />
      <News ticker={ticker} />
    </div>
  );
};

export default App;
