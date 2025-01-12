import React from "react";
import styled from "styled-components";
import { CategoriesBlock, Category } from "./style";

const Categories = ({ handleSelect, category }) => {
  return (
    <CategoriesBlock>
      {category.map((item) => (
        <Category
          key={item.name}
          active={category === item.name}
          onClick={() => handleSelect(item.name)}
        >
          {item.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Category;
