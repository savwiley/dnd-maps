import React from "react";
import PropTypes from "prop-types";
import { Inputs } from "./style";

const RollDice = (props) => {
  const { setAmount, setSides, setModifier, amount, sides, modifier } = props;

  return (
    <Inputs>
      <input
        type="number"
        id="amount"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      d
      <input
        type="number"
        id="sides"
        min="2"
        max="100"
        value={sides}
        onChange={(e) => setSides(e.target.value)}
      />
      +
      <input
        type="number"
        id="modifier"
        min="0"
        value={modifier}
        onChange={(e) => setModifier(e.target.value)}
      />
    </Inputs>
  );

  /*
    console.log(`Number of Dice: ${amount}`);
    console.log(`Type of Dice: d${sides}`);
    console.log(`Modifier: ${modifier}`);
    console.log("===");
  */
};

/*
    <>
      Number of Dice: ${amount}
      Type of Dice: d${sides}
      Modifier: ${modifier}
    </>
    */

RollDice.propTypes = {
  setAmount: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  setSides: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  setModifier: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  amount: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  sides: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  modifier: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

//module.exports = rollDice;
export default RollDice;
