import React from "react";
import { Chart, Info, News, SearchBar } from "./components";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <SearchBar />
        <Chart />
        <Info />
        <News />
      </div>
    );
  }
}

export default App;

// Lift ticker state to App, then use ticker as an argument to the API call inside components
