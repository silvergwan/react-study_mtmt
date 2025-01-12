import React, { useState, useCallback } from "react";
import { CategoriesBlock, NewsContainer, NewsListBlock } from "./style";
import { Categories } from "../../constants/category";
import NewsItem from "./newItem";
import { UseNew } from "../../hooks/useNews";

const News = () => {
  const { category, handleSelect } = UseNew();

  return (
    <NewsContainer>
      <Categories category={category} handleSelect={handleSelect} />
      <NewsListBlock>
        <NewsItem />
      </NewsListBlock>
    </NewsContainer>
  );
};

export default News;
