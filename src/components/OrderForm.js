import React from 'react';
import Dropdown from './Dropdown';
import OrderNameInput from './OrderNameInput';
import InstructionForm from './InstructionForm';

export default function OrderForm({
  setOrderName,
  setFoodId,
  setSideId,
  setDrinkId,
  handleSubmit,
  instructionInput,
  setInstructionInput,
}) {
  return (
    <div className="order-form">
      <div className="dropdown-container">
        <Dropdown dropdown="food" setId={setFoodId} />
        <Dropdown dropdown="side" setId={setSideId} />
        <Dropdown dropdown="drink" setId={setDrinkId} />
      </div>
      <OrderNameInput setOrderName={setOrderName} />
      <InstructionForm
        handleSubmit={handleSubmit}
        instructionInput={instructionInput}
        setInstructionInput={setInstructionInput}
      />
    </div>
  );
}
