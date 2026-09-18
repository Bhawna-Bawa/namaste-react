import React from "react";
import "./Shimmer.scss";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <ShimmerSimpleGallery
        imageType="thumbnail"
        imageHeight={200}
        row={2}
        col={4}
        gap={20}
        captionLines={4}
        captionType="text"
        caption={true}
      />
    </div>
  );
};

export default Shimmer;
