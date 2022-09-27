import React from "react";
import PropTypes from "prop-types";

const AnswerBox = (props) => {
  const { answer } = props;

  return <>{answer}</>;
};

AnswerBox.propTypes = {
  answer: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default AnswerBox;
