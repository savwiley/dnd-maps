import React, { useState } from "react";
import { rollDice } from "./rollDice";
import { DiceBox } from "./style"

const Dice = () => {
  const [amount, setAmount] = useState(1);
  const [sides, setSides] = useState(20);
  const [modifier, setModifier] = useState(0);



  return (
    <DiceBox>

      <input 
        type="text" 
        id="amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      /> 
      d 
      <input 
        type="text" 
        id="sides" 
        value={sides} 
        onChange={(e) => setSides(e.target.value)} 
      /> 
      + 
      <input 
        type="text" 
        id="modifier" 
        value={modifier} 
        onChange={(e) => setModifier(e.target.value)} 
      />

      <input 
        type="button" 
        value="Roll!"
        onClick={rollDice(amount, sides, modifier)} 
      />

    </DiceBox>
  )
};

export default Dice;

// rollDice only fires when the inputs change, not when the button is pushed