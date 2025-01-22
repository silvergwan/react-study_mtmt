import { useQuery } from "react-query";
import { newsData } from "../api/api";
import { queryKey } from "./querykey";

export const useNewsQuery = (category) => {
  const query = category === "all" ? "" : `&category=${category}`;
  const apiKey = process.env.REACT_APP_API_KEY;

  return useQuery(
    [queryKey.news.getNews, category],
    () => newsData(query, apiKey),
    {
      staleTime: 5 * 60 * 1000,
      catchTime: 15 * 60 * 1000,
      retry: 2, //실패 시 재시도 횟수
    }
  );
};
