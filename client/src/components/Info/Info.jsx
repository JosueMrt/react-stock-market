import React, { useEffect, useState } from "react";
import { fetchInfo, fetchLogo } from "../../api";
import styles from "./Info.module.css";

const Info = ({ ticker }) => {
  const [companyInfo, setCompanyInfo] = useState({});
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const fetch = async () => {
      setCompanyInfo(await fetchInfo(ticker));
      setLogoUrl(await fetchLogo(ticker));
    };
    fetch();
  }, [ticker]);

  if (companyInfo) {
    return (
      <div className={styles.container}>
        <div className={styles.text}>
          {Object.keys(companyInfo).map((val) => (
            <div className={styles[val]} key={val}>
              {companyInfo[val]}
            </div>
          ))}
        </div>
        <img
          className={styles.logo}
          src={logoUrl}
          alt={`Logo of ${companyInfo.companyName}`}
        />
      </div>
    );
  } else return null;
};

export default Info;

// Display: #1 Company Name, Ticker, Logo
// Display: #2 Current Price, Week High, Week Low
