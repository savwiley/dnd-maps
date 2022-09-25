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
        onChange={(e) => setAmount(e.value)} 
      /> 
      d 
      <input 
        type="text" 
        id="sides" 
        value={sides} 
        onChange={(e) => setSides(e.value)} 
      /> 
      + 
      <input 
        type="text" 
        id="modifier" 
        value={modifier} 
        onChange={(e) => setModifier(e.value)} 
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