import React, { useState } from "react";
import { RollDice } from "./rollDice";
import { DiceBox } from "./style";

const Dice = () => {
  const [amount, setAmount] = useState(1);
  const [sides, setSides] = useState(20);
  const [modifier, setModifier] = useState(0);

  return (
    <DiceBox>
      <RollDice
        useAmount={setAmount}
        useSides={setSides}
        useModifier={setModifier}
        amount={amount}
        sides={sides}
        modifier={modifier}
      />
      
      <input
        type="button"
        value="Roll!"
        onClick={rollDice(amount, sides, modifier)}
      />
    </DiceBox>
  );
};

export default Dice;

// rollDice only fires when the inputs change, not when the button is pushed
