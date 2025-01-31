import React from "react";
import { SkeletonContainer, SkeletonItem } from "./style";

const SkeletonComponent = ({ height }) => {
  return (
    <SkeletonContainer>
      {Array.from({ length: 15 }).map((item, idx) => (
        <SkeletonItem height={height} key={idx} />
      ))}
    </SkeletonContainer>
  );
};

export default SkeletonComponent;
