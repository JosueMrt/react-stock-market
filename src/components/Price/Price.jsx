import React, { useEffect, useState } from "react";
import styles from "./Price.module.css";
import { fetchCurrentPrice } from "../../api";

const Price = ({ ticker }) => {
  const [currentPrice, setCurrentPrice] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      setCurrentPrice(await fetchCurrentPrice(ticker));
    };
    fetch();
  }, [ticker]);
  return (
    <div className={styles.container}>
      <p className={styles.dollarSymbol}>$</p>
      <p className={styles.price}>{currentPrice}</p>
    </div>
  );
};

export default Price;
