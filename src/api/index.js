export const fetchDailyData = async (ticker = "vfiax") => {
  const response = await fetch(
    "https://sandbox.iexapis.com/stable/stock/" +
      ticker +
      "/chart?token=Tsk_536fd841bd3446e09e6a7895835fa6c6"
  );
  console.log("feteched");
  const data = await response.json();
  return data.map((val, i) => {
    return { date: data[i].date, close: data[i].close };
  });
};
