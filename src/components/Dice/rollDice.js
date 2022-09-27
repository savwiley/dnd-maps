import React from "react";

const RollDice = (props) => {
  const { useAmount, useSides, useModifier, amount, sides, modifier } = props;

  return (
    <>
      <input
        type="number"
        id="amount"
        min="1"
        value={amount}
        onChange={(e) => useAmount(e.target.value)}
      />
      d
      <input
        type="number"
        id="sides"
        min="2"
        max="100"
        value={sides}
        onChange={(e) => useSides(e.target.value)}
      />
      +
      <input
        type="number"
        id="modifier"
        min="0"
        value={modifier}
        onChange={(e) => useModifier(e.target.value)}
      />
    </>
  );

  /*
    console.log(`Number of Dice: ${amount}`);
    console.log(`Type of Dice: d${sides}`);
    console.log(`Modifier: ${modifier}`);
    console.log("===");

  /*
  let answer;
  let answerArr = [];

  if (amount === 1 && modifier === 0) {
    answer = Math.floor(Math.random * sides);
    return `1 d${sides} = ${answer}`;

  } else if (amount === 1 && modifier > 0) {
    answer = Math.floor(Math.random * sides) + modifier;
    return `1 d${sides} + ${modifier} = ${answer}`;

  } else {
    for (let i = 0; i < amount; i++) {
      answer = Math.floor(Math.random * sides) + modifier;
      answerArr.push(`d${sides} + ${modifier} = ${answer}`);
    }
    return answerArr;
  }
  */
};

//Math.floor(Math.random() * sides) + modifier;

/*
    <>
      Number of Dice: ${amount}
      Type of Dice: d${sides}
      Modifier: ${modifier}
    </>
    */

//module.exports = rollDice;
export default RollDice;
