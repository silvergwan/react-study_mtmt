import React, { useState, useCallback } from "react";
import { CategoriesBlock, NewsContainer, NewsListBlock } from "./style";
import Categories from "./category";
import NewsItem from "./newItem";
import { useNews } from "../../hooks/useNews";
import SkeletonComponent from "../skeleton";

const News = () => {
  const { ...news } = useNews();

  return (
    <NewsContainer>
      <Categories category={news.category} handleSelect={news.handleSelect} />
      <NewsListBlock>
        {news.loading ? (
          <SkeletonComponent height={100} />
        ) : news.articles.length > 0 ? (
          news.articles.map((item) => (
            <NewsItem key={item.url} article={item} />
          ))
        ) : (
          <div>뉴스가 없습니다.</div>
        )}
      </NewsListBlock>
    </NewsContainer>
  );
};

export default News;
