import React, { useState } from "react";
import NumbInputs from "./NumbInputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { DiceBox, Inputs, DiceAnswers, RolledLI, MainAnswer } from "./style";

const Dice = () => {
  const [answer, setAnswer] = useState([0]);
  const [rolled, setRolled] = useState(["waiting..."]);
  const [amount, setAmount] = useState([]);
  const [sides, setSides] = useState([]);
  const [modifier, setModifier] = useState([]);
  const [numbOfDice, setNumbOfDice] = useState(1);

  const roll = (amount, sides, modifier) => {
    let answerArr = [];
    let rolledArr = [];
    for (let i = 0; i < amount.length; i++) {
      for (let a = 0; a < amount[i]; a++) {
        let diceRoll =
          Math.floor(Math.random() * sides[i]) + 1 + Number(modifier[i]);
        rolledArr.push(`${amount[i]}d${sides[i]}+${modifier[i]} = ${diceRoll}`);
        answerArr.push(diceRoll);
      }
    }
    setAnswer(answerArr);
    setRolled(rolledArr);
  };

  return (
    <DiceBox>
      <Inputs>
        {[...Array(numbOfDice)].map((e, i) => (
          <NumbInputs
            setAmount={setAmount}
            setSides={setSides}
            setModifier={setModifier}
            amount={amount}
            sides={sides}
            modifier={modifier}
            key={i}
            index={i}
          />
        ))}

        <input
          type="button"
          value="Roll!"
          onClick={() => {
            roll(amount, sides, modifier);
            setNumbOfDice(1);
            setAmount([]);
            setSides([]);
            setModifier([]);
            document.querySelectorAll(".toClear").forEach((e) => {
              e.value = "";
              e.disabled = false;
            });
          }}
        />
        <input
          type="button"
          value="+"
          onClick={() => {
            setNumbOfDice(numbOfDice + 1);
          }}
        />
        {numbOfDice > 1 ? (
          <input
            type="button"
            value="-"
            onClick={() => {
              setNumbOfDice(numbOfDice - 1);
            }}
          />
        ) : null}
        <input
          type="button"
          value="Clear"
          onClick={() => {
            setNumbOfDice(1);
            setAmount([]);
            setSides([]);
            setModifier([]);
            document.querySelectorAll(".toClear").forEach((e) => {
              e.value = "";
              e.disabled = false;
            });
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
