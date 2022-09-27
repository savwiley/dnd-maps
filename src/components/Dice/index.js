import React, { useState, useEffect } from "react";
import RollDice from "./RollDice";
import AnswerBox from "./AnswerBox";
import { DiceBox } from "./style";

const Dice = () => {
  const [amount, setAmount] = useState(1);
  const [sides, setSides] = useState(20);
  const [modifier, setModifier] = useState(0);
  const [change, setChange] = useState(false);
  const [answer, setAnswer] = useState();

  useEffect(() => {
    for (let i = 0; i < amount; i++) {
      let rolled = Math.floor(Math.random * sides) + modifier;
      setAnswer(`1 d${sides} + ${modifier} = ${rolled}`);
    }
  }, [amount, sides, modifier, change]);

  return (
    <DiceBox>
      <RollDice
        setAmount={setAmount}
        setSides={setSides}
        setModifier={setModifier}
        amount={amount}
        sides={sides}
        modifier={modifier}
      />

      <input
        type="button"
        value="Roll!"
        onClick={change ? setChange(false) : setChange(true)}
      />

      <AnswerBox answer={answer} />
    </DiceBox>
  );
};

export default Dice;
