import React, { useState, useCallback, useTransition } from "react";
import axios from "axios";
import { useNewsQuery } from "../queries/new.query";

export const useNews = () => {
  const [category, setCategory] = useState("all");
  const [isPending, startTransition] = useTransition();
  const { data: articles = [], isLoading: loading } = useNewsQuery(category);

  const handleSelect = useCallback((category) => {
    startTransition(() => {
      setCategory(category);
    });
  }, []);

  return {
    articles,
    loading,
    category,
    handleSelect,
  };
};
