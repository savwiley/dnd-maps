import React from "react";
import PropTypes from "prop-types";

const NumbInputs = (props) => {
  const { setAmount, setSides, setModifier, amount, sides, modifier, key } = props;

  //https://stackoverflow.com/questions/60257629/how-to-add-item-to-immutable-array-in-react-setstate-in-typescript

  return (
    <>
      (
      <input
        type="number"
        id="amount"
        min="1"
        defaultValue={amount[key]}
        onBlur={(e) => setAmount(prev => {
          const list = [...prev, e.target.value]
          return list;
        })}
      />
      d
      <input
        type="number"
        id="sides"
        min="2"
        max="100"
        defaultValue={sides[key]}
        onBlur={(e) => setSides(prev => {
          const list = [...prev, e.target.value]
          return list;
        })}
      />
      +
      <input
        type="number"
        id="modifier"
        min="0"
        defaultValue={modifier[key]}
        onBlur={(e) => setModifier(prev => {
          const list = [...prev, e.target.value]
          return list;
        })}
      />
      )
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
  amount: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  sides: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  modifier: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default NumbInputs;
