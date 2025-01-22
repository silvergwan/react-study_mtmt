import axios from "axios";

export const newsData = async (query, apiKey) => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`
    );
    return data.articles;
  } catch (error) {
    throw new Error("failed to data");
  }
};
