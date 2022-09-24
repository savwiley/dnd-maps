import React, { useState } from "react";
import { DiceBox, Answer } from "./style"

const Dice = () => {
  const [amount, setAmount] = useState(1);
  const [sides, setSides] = useState(20);
  const [modifier, setModifier] = useState(0);



  return (
    <DiceBox>

      <input type="text" id="amount" value={amount} /> 
      d 
      <input type="text" id="sides" value={sides} /> 
      + 
      <input type="text" id="modifier" value={modifier} />

      <input type="button" onClick={} />

      <Answer></Answer>

    </DiceBox>
  )
};

export default Dice;