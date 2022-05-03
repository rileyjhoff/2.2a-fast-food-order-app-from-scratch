import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className="order-images">
      <img alt="food" src={`food-${foodId}.png`} />
      <img alt="side" src={`side-${sideId}.png`} />
      <img alt="drink" src={`drink-${drinkId}.png`} />
    </div>
  );
}
