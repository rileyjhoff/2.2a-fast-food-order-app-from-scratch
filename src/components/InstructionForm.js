import React from 'react';

export default function InstructionForm({ handleSubmit, instructionInput, setInstructionInput }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={instructionInput} onChange={(e) => setInstructionInput(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}
