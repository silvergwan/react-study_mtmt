import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useNewsQuery } from "../queries/new.query";

export const useNews = () => {
  const [category, setCategory] = useState("all");
  const { data: articles = [], isLoading: loading } = useNewsQuery(category);

  const handleSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  return {
    articles,
    loading,
    category,
    handleSelect,
  };
};
