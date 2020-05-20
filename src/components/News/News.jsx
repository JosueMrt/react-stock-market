import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import { fetchNews } from "../../api";
import Card from "./Card/Card";

const News = ({ ticker }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setNews(await fetchNews(ticker));
    };
    fetch();
  }, [ticker]);

  return (
    <div className={styles.container}>
      <h3>Top Stories</h3>
      {news.map((val, i) => (
        <Card news={val} key={i}/>
      ))}
    </div>
  );
};

export default News;
