import React, { useState } from "react";
import { Chart, Info, News, SearchBar } from "./components";
import styles from "./App.module.css";

const App = () => {
  const [ticker, setTicker] = useState("TWTR");
  const handleSearch = (ticker) => {
    setTicker(ticker);
  };
  return (
    <div className={styles.container}>
      <SearchBar handleSearch={handleSearch} />
      <Chart ticker={ticker} />
      <Info ticker={ticker}/>
      <News />
    </div>
  );
};

export default App;

// Search bar validation
// Add time window selector
// Add infos & news