import React from "react";
import { Chart, Info, News, SearchBar } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  async componentDidMount() {
    const data = await fetchData("https://sandbox.iexapis.com/stable/stock/twtr/chart?token=Tsk_536fd841bd3446e09e6a7895835fa6c6")
    console.log(data)
  }
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
