import React from "react";
import "../../index.css"; 

const ShimmerCard = () => {
  return (
    <div className="shimmer-container">
      {Array(6) // Create 6 shimmer cards
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-line short"></div>
            <div className="shimmer-line long"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerCard;
