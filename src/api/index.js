export const fetchDailyData = async (ticker, time) => {
  const response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/${time}?token=Tsk_536fd841bd3446e09e6a7895835fa6c6`
  );
  console.log("feteched: " + ticker);
  const data = await response.json();
  return data.map((val, i) => {
    return { date: data[i].date, close: data[i].close };
  });
};

export const fetchTickerList = async () => {
  const response = await fetch(
    "https://sandbox.iexapis.com/stable/ref-data/symbols?token=Tsk_536fd841bd3446e09e6a7895835fa6c6"
  );
  const data = await response.json();
  return data.map(({symbol}) => symbol)
};
