import './App.css';
import OrderDisplay from './components/OrderDisplay';
import OrderForm from './components/OrderForm';
import { useState } from 'react';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('Unknown');
  const [instructions, setInstructions] = useState([]);
  const [instructionInput, setInstructionInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionInput]);
    setInstructionInput('');
  }

  return (
    <div className="App">
      <h2>Order for {orderName}</h2>
      <OrderDisplay
        orderName={orderName}
        foodId={foodId}
        sideId={sideId}
        drinkId={drinkId}
        instructions={instructions}
      />
      <OrderForm
        setOrderName={setOrderName}
        setFoodId={setFoodId}
        setSideId={setSideId}
        setDrinkId={setDrinkId}
        handleSubmit={handleSubmit}
        instructionInput={instructionInput}
        setInstructionInput={setInstructionInput}
      />
    </div>
  );
}

export default App;
