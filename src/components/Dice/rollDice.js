

export const rollDice = (amount, sides, modifier) => {

  
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
}
   
  
  
  //Math.floor(Math.random() * sides) + modifier;
    
    /*
    <>
      Number of Dice: ${amount}
      Type of Dice: d${sides}
      Modifier: ${modifier}
    </>
    */
  


//module.exports = rollDice;
//export default rollDice;