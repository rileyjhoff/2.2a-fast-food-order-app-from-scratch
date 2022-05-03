import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <div className="instructions">
      <h5>Instructions:</h5>
      {instructions.map((instruction, i) => (
        <Instruction key={instruction + i} instruction={instruction} />
      ))}
    </div>
  );
}
