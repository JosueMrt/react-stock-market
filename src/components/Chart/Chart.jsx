import React from "react";
import { fetchDailyData } from "../../api";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      setDailyData(await fetchDailyData());
    };
    fetch();
  }, []);
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ close }) => close),
            label: "Close Price",
            borderColor: "#333ff",
            backgroundColor: "#00c805",
            fill: true,
            lineTension: 0.1,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
