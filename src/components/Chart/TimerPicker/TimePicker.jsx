import React from "react";
import styles from "./TimePicker.module.css"

const TimePicker = ({ times, setTimePeriod }) => {
  return (
    <div className={styles.container}>
      {times.map((val) => (
        <button
          onClick={() => setTimePeriod(val)}
          className={styles[val]}
          key={val}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default TimePicker;
