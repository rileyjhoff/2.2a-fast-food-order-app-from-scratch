import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className="order-images">
      <img alt="food" src={`food-${foodId}`} />
      <img alt="side" src={`side-${sideId}`} />
      <img alt="drink" src={`drink-${drinkId}`} />
    </div>
  );
}
