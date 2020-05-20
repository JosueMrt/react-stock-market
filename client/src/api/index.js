export const fetchDailyData = async (ticker, time) => {
  const response = await fetch(`/api/dailydata/${ticker}/${time}`);
  console.log("fetched: " + ticker);
  const data = await response.json();
  return data.map((val, i) => {
    return { date: data[i].date, close: data[i].close };
  });
};

export const fetchInfo = async (ticker) => {
  const response = await fetch(`/api/info/${ticker}`);
  const { symbol, companyName } = await response.json();
  return { symbol, companyName };
};

export const fetchLogo = async (ticker) => {
  const response = await fetch(`/api/logo/${ticker}`);
  const { url } = await response.json();
  return url;
};

export const fetchCurrentPrice = async (ticker) => {
  const response = await fetch(`/api/price/${ticker}`);
  const data = await response.json();
  return data;
};

export const fetchNews = async (ticker) => {
  const response = await fetch(`/api/news/${ticker}`);
  const data = await response.json();
  return data;
};
