import React from "react";
import PropTypes from "prop-types";

const NumbInputs = (props) => {
  const { setAmount, setSides, setModifier, amount, sides, modifier } = props;

  return (
    <>
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
    </>
  );
};

NumbInputs.propTypes = {
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

export default NumbInputs;
