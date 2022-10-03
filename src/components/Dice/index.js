import React, { useState } from "react";
import NumbInputs from "./NumbInputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { DiceBox, Inputs, DiceAnswers, RolledLI, MainAnswer } from "./style";

const Dice = () => {
  const [answer, setAnswer] = useState([0]);
  const [rolled, setRolled] = useState(["waiting..."]);
  const [amount, setAmount] = useState(1);
  const [sides, setSides] = useState(20);
  const [modifier, setModifier] = useState(0);
  const [numbOfDice, setNumbOfDice] = useState(1);

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

  //put amounts/sides/modifiers into arrays & have two if statements
  //use buttons to add/remove text inputs as a component

  return (
    <DiceBox>
      <Inputs>

        {[...Array(numbOfDice)].map((e, i) =>
          <NumbInputs
            setAmount={setAmount}
            setSides={setSides}
            setModifier={setModifier}
            amount={amount}
            sides={sides}
            modifier={modifier}
            key={i}
          />
        )}

        <input
          type="button"
          value="Roll!"
          onClick={() => {
            roll(amount, sides, modifier);
          }}
        />
        <input
          type="button"
          value="+"
          onClick={() => {
            setNumbOfDice(numbOfDice + 1);
            console.log(numbOfDice);
          }}
        />
      </Inputs>

      <DiceAnswers>
        {rolled.map((a, i) => (
          <RolledLI key={i}>{a}</RolledLI>
        ))}
      </DiceAnswers>

      <MainAnswer>{answer.reduce((partial, a) => partial + a, 0)}</MainAnswer>

      <FontAwesomeIcon icon={faDiceD20} className="icon" />
    </DiceBox>
  );
};

export default Dice;
