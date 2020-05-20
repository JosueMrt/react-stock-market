import React, { useState } from "react";
import styles from "./TimePicker.module.css";

const TimePicker = ({ setTimePeriod }) => {
  const times = ["1m", "6m", "1y", "5y"];
  const [activeTime, setActiveTime] = useState(times[1]);

  return (
    <div className={styles.container}>
      {times.map((val) => (
        <button
          onClick={() => {
            setTimePeriod(val);
            setActiveTime(val);
          }}
          className={activeTime === val ? styles.active : styles.default}
          key={val}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default TimePicker;
