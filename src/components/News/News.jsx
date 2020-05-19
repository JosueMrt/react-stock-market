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

  const placeHolderNews = [
    {
      headline: "Elon Musk hogs the headlines again!",
      summary:
        "Elon Musk blah blah labo ejga jegjiae gjia ejgaiegjaieg jaejg egj",
      url:
        "https://medium.com/@m.muslimiblog/elon-musk-hogs-the-headlines-again-1e833491be2a",
      image: "https://miro.medium.com/max/1400/0*g_EGoegPHzWKcPvJ",
    },
  ];

  return (
    <div className={styles.container}>
      <h3>Top Stories</h3>
      {/* <Card news={placeHolderNews[0]} /> */}
      {news.map((val) => (
        <Card news={val} />
      ))}
    </div>
  );
};

export default News;
