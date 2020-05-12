import React from "react";
import { Chart, Info, News, SearchBar } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Chart />
      <Info />
      <News />
    </div>
  );
}

export default App;
