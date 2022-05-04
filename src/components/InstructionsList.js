import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <div className="instructions">
      <h4>Instructions:</h4>
      {instructions.map((instruction, i) => (
        <Instruction key={instruction + i} instruction={instruction} />
      ))}
    </div>
  );
}
