import React from "react";
import { DiceAnswers, Rolled } from "./style";
import PropTypes from "prop-types";

const AnswerBox = (props) => {
  const { answer } = props;

  return (
    <DiceAnswers>
      {answer.map((a, i) => (
        <Rolled key={i}>{a}</Rolled>
      ))}
    </DiceAnswers>
  );
};

AnswerBox.propTypes = {
  answer: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default AnswerBox;
