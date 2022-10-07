import React, { useState } from "react";
import NumbInputs from "./NumbInputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  DiceBox,
  Inputs,
  DiceAnswers,
  RolledLI,
  MainAnswer,
  ChangingIcon,
} from "./style";

const Dice = () => {
  const [answer, setAnswer] = useState([0]);
  const [rolled, setRolled] = useState(["waiting..."]);
  const [amount, setAmount] = useState([]);
  const [sides, setSides] = useState([]);
  const [modifier, setModifier] = useState([]);
  const [numbOfDice, setNumbOfDice] = useState(1);
  const [diceOpen, setDiceOpen] = useState(false);

  const roll = (amount, sides, modifier) => {
    let answerArr = [];
    let rolledArr = [];
    for (let i = 0; i < amount.length; i++) {
      for (let a = 0; a < amount[i]; a++) {
        let side;
        let mod;
        sides[i] ? (side = sides[i]) : (side = 20);
        modifier[i] ? (mod = modifier[i]) : (mod = 0);
        let diceRoll = Math.floor(Math.random() * side) + 1 + Number(mod);
        rolledArr.push(`${amount[i]}d${side}+${mod} = ${diceRoll}`);
        answerArr.push(diceRoll);
      }
    }
    setAnswer(answerArr);
    setRolled(rolledArr);
  };

  return (
    <>
      {/*button to raise and lower dice roller*/}
      <ChangingIcon changeTo={diceOpen ? "170px" : "10px"}>
        <FontAwesomeIcon
          icon={diceOpen ? faXmark : faDiceD20}
          className="iconButton"
          onClick={() => {
            diceOpen ? setDiceOpen(false) : setDiceOpen(true);
          }}
        />
      </ChangingIcon>

      {/*dice roller container*/}
      <DiceBox lift={diceOpen ? "0" : "-180px"}>
        <Inputs>
          {/*number inputs, repeated as needed*/}
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

          {/*roll button*/}
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

          {/*add inputs button*/}
          <input
            type="button"
            value="+"
            onClick={() => {
              setNumbOfDice(numbOfDice + 1);
            }}
          />

          {/*subtract inputs button if there are more than 1 set*/}
          {numbOfDice > 1 ? (
            <input
              type="button"
              value="-"
              onClick={() => {
                if (amount.length === numbOfDice) {
                  setAmount([...amount.slice(0, -1)]);
                  setSides([...sides.slice(0, -1)]);
                  setModifier([...modifier.slice(0, -1)]);
                }
                setNumbOfDice(numbOfDice - 1);
              }}
            />
          ) : null}

          {/*roll 1d20*/}
          <input
            type="button"
            value="Roll 1d20"
            onClick={() => {
              roll([1], [20], [0]);
            }}
          />

          {/*reset everything*/}
          <input
            type="button"
            value="Reset"
            onClick={() => {
              setNumbOfDice(1);
              setAmount([]);
              setSides([]);
              setModifier([]);
              setRolled(["waiting..."]);
              setAnswer([0]);
              document.querySelectorAll(".toClear").forEach((e) => {
                e.value = "";
                e.disabled = false;
              });
            }}
          />
        </Inputs>

        {/*list of all rolls*/}
        <DiceAnswers>
          {rolled.map((a, i) => (
            <RolledLI key={i}>{a}</RolledLI>
          ))}
        </DiceAnswers>

        {/*sum of all rolls*/}
        <MainAnswer>{answer.reduce((partial, a) => partial + a, 0)}</MainAnswer>

        {/*decoration*/}
        <FontAwesomeIcon icon={faDiceD20} className="icon" />
      </DiceBox>
    </>
  );
};

export default Dice;
