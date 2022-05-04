import React from 'react';
import InstructionsList from './InstructionsList';
import OrderImages from './OrderImages';

export default function OrderDisplay({ orderName, foodId, sideId, drinkId, instructions }) {
  return (
    <div className="order-display">
      <h2>Order for {orderName}</h2>
      <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
      <InstructionsList instructions={instructions} />
    </div>
  );
}
