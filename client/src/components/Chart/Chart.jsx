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

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const height = document.getElementById("chart-wrapper").offsetHeight;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#41E2BA");
    gradient.addColorStop(1, "rgba(65,225,186,0)");
    return {
      labels: dailyData.map(({ date }) => date),
      datasets: [
        {
          data: dailyData.map(({ close }) => close),
          label: "Close Price",
          pointRadius: 0,
          lineTension: 0.1,
          backgroundColor: gradient,
          borderColor: "#41E2BA",
        },
      ],
    };
  };

  const options = {
    legend: { display: false },
    scales: { xAxes: [{ display: false }] },
  };

  return (
    <div className={styles.container}>
      <TimePicker setTimePeriod={setTimePeriod} />
      <div id="chart-wrapper" className={styles.chartWrapper}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
