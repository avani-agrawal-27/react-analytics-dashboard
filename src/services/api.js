import axios from "axios";

export const getCryptoData = async (range) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets`,
      {
        params: {
          vs_currency: "usd",
          days: range,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    throw error;
  }
};