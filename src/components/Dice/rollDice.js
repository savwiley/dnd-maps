/*
import React from "react";
import props from "./index";
*/

const rollDice = (amount, sides, modifier) => {
  //const { amount, sides, modifier } = props;

  return Math.floor(Math.random() * sides) + modifier;
    
    /*
    <>
      Number of Dice: ${amount}
      Type of Dice: d${sides}
      Modifier: ${modifier}
    </>
    */
  

}

module.exports = rollDice;
//export default rollDice;