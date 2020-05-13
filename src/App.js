import React, { useState } from "react";
import { Chart, Info, News, SearchBar } from "./components";
import styles from "./App.module.css";

const App = () => {
  const [ticker, setTicker] = useState("");
  const handleSearch = (e) => {
    setTicker(e.target.value);
  };
  return (
    <div className={styles.container}>
      <SearchBar handleSearch={handleSearch} />
      <Chart ticker={ticker} />
      <Info />
      <News />
    </div>
  );
};

export default App;

// Lift ticker state to App, then use ticker as an argument to the API call inside components
