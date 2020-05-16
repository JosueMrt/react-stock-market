export const fetchDailyData = async (ticker, time) => {
  const response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/${time}?token=Tsk_536fd841bd3446e09e6a7895835fa6c6`
  );
  console.log("fetched: " + ticker);
  const data = await response.json();
  return data.map((val, i) => {
    return { date: data[i].date, close: data[i].close };
  });
};

export const fetchTickerList = async (input) => {
  const response = await fetch(
    `https://ticker-2e1ica8b9.now.sh/keyword/${input}`
  );
  const data = await response.json();
  return data.map(({ symbol }) => symbol);
};

export const fetchInfo = async (ticker) => {
  const response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/company?token=Tsk_536fd841bd3446e09e6a7895835fa6c6`
  );
  const {
    companyName,
    symbol,
    exchange,
    description,
  } = await response.json();
  return { companyName, symbol, exchange, description };
};

export const fetchLogo = async (ticker) => {
  const response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/logo?token=Tsk_536fd841bd3446e09e6a7895835fa6c6`
  );
  const { url } = await response.json();
  return url;
};
