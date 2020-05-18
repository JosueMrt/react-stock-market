import React from "react";
import { fetchDailyData } from "../../api";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import TimePicker from "./TimerPicker/TimePicker";
import styles from "./Chart.module.css";

const Chart = ({ ticker }) => {
  const [dailyData, setDailyData] = useState([]);
  const [timePeriod, setTimePeriod] = useState("6m");

  useEffect(() => {
    const fetch = async () => {
      setDailyData(await fetchDailyData(ticker, timePeriod));
    };
    fetch();
  }, [ticker, timePeriod]);

  const lineChart = dailyData.length ? (
    <Line
      className={styles.chart}
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ close }) => close),
            label: "Close Price",
            backgroundColor: "#00c805",
            fill: true,
            lineTension: 0.1,
            pointRadius: 0,
          },
        ],
      }}
      options={{
        scales: { xAxes: [{ display: false }] },
        legend: { display: false },
        maintainAspectRatio: false,
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <TimePicker setTimePeriod={setTimePeriod} />
      {lineChart}
    </div>
  );
};

export default Chart;
