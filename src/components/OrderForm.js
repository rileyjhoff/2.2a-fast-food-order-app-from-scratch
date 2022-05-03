import React from 'react';
import Dropdown from './Dropdown';

export default function OrderForm({
  setOrderName,
  setFoodId,
  setSideId,
  setDrinkId,
  handleSubmit,
  setInstructionInput,
}) {
  return (
    <div className="order-form">
      <Dropdown dropdown="food" setId={setFoodId} />
      <Dropdown dropdown="side" setId={setSideId} />
      <Dropdown dropdown="drink" setId={setDrinkId} />
    </div>
  );
}
