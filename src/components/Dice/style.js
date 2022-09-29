import styled from "styled-components";

export const DiceBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  padding: 20px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

export const Inputs = styled.div`
  background: transparent;
  input {
    width: 50px;
  }
`;

export const Rolled = styled.div`
  display: block;
  padding: 2px 50px 2px 0;
`;

export const DiceAnswers = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  align-content: baseline;
`;
