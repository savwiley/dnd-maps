import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import { DiceBox, Inputs, DiceAnswers, RolledLI, MainAnswer } from "./style";

const Dice = () => {
  const [answer, setAnswer] = useState([0]);
  const [rolled, setRolled] = useState(["waiting..."]);
  const [amount, setAmount] = useState(1);
  const [sides, setSides] = useState(20);
  const [modifier, setModifier] = useState(0);

  const roll = (amount, sides, modifier) => {
    let answerArr = [];
    let rolledArr = [];
    for (let i = 0; i < amount; i++) {
      let diceRoll = Math.floor(Math.random() * sides) + 1 + Number(modifier);
      rolledArr.push(`${amount}d${sides}+${modifier} = ${diceRoll}`);
      answerArr.push(diceRoll);
    }
    setAnswer(answerArr);
    setRolled(rolledArr);
  };

  return (
    <DiceBox>
      <Inputs>
        <input
          type="number"
          id="amount"
          min="1"
          defaultValue={amount}
          onBlur={(e) => setAmount(e.target.value)}
        />
        d
        <input
          type="number"
          id="sides"
          min="2"
          max="100"
          defaultValue={sides}
          onBlur={(e) => setSides(e.target.value)}
        />
        +
        <input
          type="number"
          id="modifier"
          min="0"
          defaultValue={modifier}
          onBlur={(e) => setModifier(e.target.value)}
        />
        <input
          type="button"
          value="Roll!"
          onClick={() => {
            roll(amount, sides, modifier);
          }}
        />
      </Inputs>

      <DiceAnswers>
        {rolled.map((a, i) => (
          <RolledLI key={i}>{a}</RolledLI>
        ))}
      </DiceAnswers>

      <MainAnswer>
        {answer.reduce((partial, a) => partial + a, 0)}
      </MainAnswer>

      <FontAwesomeIcon icon={faDiceD20} className="icon" />
    </DiceBox>
  );
};

export default Dice;
