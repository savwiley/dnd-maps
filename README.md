# D&D Combat Map

This app will include a grid that can be colored in. Squares will be interactive to hold characters/objects/etc. with interactive stats.

Dice roller will include d4, d6, d8, d10, d12, d20, and d%. Will include how many dice are rolled at once and modifiers.

```
const rollDice = (amount, diceType, modifier) => {
  let answer;
  let answerArr = [];
  if (amount === 0 && modifier === 0) {
    answer = Math.floor(Math.random * diceType);
    return `"1" + ${diceType} + " = " + ${answer};
  } else if (amount === 0 && modifier > 0) {
    answer = Math.floor(Math.random * diceType) + modifier;
    return `"1" + ${diceType} + "+" + ${modifier} " = " + ${answer};
  } else {
    for (let i = 0; i < amount; i++) {
      answerArr.push(Math.floor(Math.random * diceType) + modifier);
    }
    //show each in map
    return `${diceType} + "+" + ${modifier} + "=" + ${answer};
    }
  }
}

Math.floor(Math.random * diceType)) + modifier;
```