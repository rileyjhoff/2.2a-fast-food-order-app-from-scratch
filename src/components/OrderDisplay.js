import React from 'react';
import InstructionsList from './InstructionsList';
import OrderImages from './OrderImages';

export default function OrderDisplay({ foodId, sideId, drinkId, instructions }) {
  return (
    <div className="order-display">
      <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
      <InstructionsList instructions={instructions} />
    </div>
  );
}
