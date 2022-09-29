import React, { useState } from "react";
import AnswerBox from "./AnswerBox";
import { DiceBox, Inputs } from "./style";

const Dice = () => {
  const [answer, setAnswer] = useState("rolling...");

  let amount = 1;
  let sides = 20;
  let modifier = 0;

  const roll = (amount, sides, modifier) => {
    for (let i = 0; i < amount; i++) {
      let rolled = Math.floor(Math.random() * sides) + 1 + modifier;
      setAnswer(`1 d${sides} + ${modifier} = ${rolled}`);
      console.log(answer);
    }
  }

  return (
    <DiceBox>
      <Inputs>
        <input
          type="number"
          id="amount"
          min="1"
          defaultValue={amount}
          onBlur={(e) => amount = e.target.value}
        />
        d
        <input
          type="number"
          id="sides"
          min="2"
          max="100"
          defaultValue={sides}
          onBlur={(e) => sides = e.target.value}
        />
        +
        <input
          type="number"
          id="modifier"
          min="0"
          defaultValue={modifier}
          onBlur={(e) => modifier = e.target.value}
        />

        <input
          type="button"
          value="Roll!"
          onClick={() => {roll(amount, sides, modifier)}}
        />
      </Inputs>

      <AnswerBox answer={answer} />
    </DiceBox>
  );
};

export default Dice;
