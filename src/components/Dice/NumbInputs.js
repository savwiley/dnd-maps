import React from "react";
import PropTypes from "prop-types";

const NumbInputs = (props) => {
  const { setAmount, setSides, setModifier, amount, sides, modifier, index } = props;

  return (
    <>
      (
      <input
        type="number"
        className="amount toClear"
        min="1"
        defaultValue={amount[index]}
        placeholder="0"
        onBlur={(e) => 
          setAmount(prev => {
            const list = [...prev, e.target.value];
            e.target.disabled = true;
            return list;
          })
        }
        required 
      />
      d
      <input
        type="number"
        className="sides toClear"
        min="2"
        max="100"
        defaultValue={sides[index]}
        placeholder="20"
        onBlur={(e) => 
          setSides(prev => {
            const list = [...prev, e.target.value];
            e.target.disabled = true;
            return list;
          }
        )}
        required 
      />
      +
      <input
        type="number"
        className="modifier toClear"
        min="0"
        defaultValue={modifier[index]}
        placeholder="0"
        onBlur={(e) => 
          setModifier(prev => {
            const list = [...prev, e.target.value];
            e.target.disabled = true;
            return list;
          }
        )}
        required 
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
  index: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

export default NumbInputs;
