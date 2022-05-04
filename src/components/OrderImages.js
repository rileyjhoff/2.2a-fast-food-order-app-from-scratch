import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className="order-images">
      <div className="image-container">
        <img alt="food" src={`food-${foodId}.png`} />
      </div>
      <div className="image-container">
        <img alt="side" src={`side-${sideId}.png`} />
      </div>
      <div className="image-container">
        <img alt="drink" src={`drink-${drinkId}.png`} />
      </div>
    </div>
  );
}
