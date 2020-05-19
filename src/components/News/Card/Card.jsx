import React from "react";
import styles from "./Card.module.css";

const Card = ({ news }) => {
  return (
    <div className={styles.container}>
      <img src={news.image} alt="Article Thumbnail" />
      <div className={styles.textContainer}>
        <a href={news.url}>
          <h1>{news.headline}</h1>
        </a>
        <p>{news.summary.slice(0, 99)}...</p>
      </div>
    </div>
  );
};

export default Card;
