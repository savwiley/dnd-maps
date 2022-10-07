import styled from "styled-components";

export const DiceBox = styled.div`
  background: var(--background);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  padding: 20px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  overflow-x: auto;
  overflow-y: hidden;
  z-index: 2;
  .icon {
    position: absolute;
    bottom: 5px;
    left: 20px;
    right: 90%;
    font-size: 100px;
    color: var(--lightAccent);
    z-index: 0;
  }
  .iconButton {
    position: fixed;
    bottom: 10px;
    left: 10px;
    font-size: 30px;
    color: var(--text);
    background: var(--lightAccent);
    padding: 5px;
    border-radius: 50px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    z-index: 0;
  }
`;

export const Inputs = styled.div`
  position: relative;
  z-index: 1;
  input {
    margin: 0 3px;
    padding: 2px;
    background: var(--text);
    border: 1px solid var(--background);
    color: var(--background);
  }
  input:disabled {
    background: var(--background);
    color: var(--text);
    border-color: var(--text);
  }
  input:first-of-type {
    margin-left: 0;
  }
  input[type="button"] {
    margin-left: 10px;
    min-width: 50px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
  }
  input[type="button"]:hover {
    background: var(--background);
    border-color: var(--text);
    color: var(--text);
  }
  input[type="number"] {
    width: 30px;
  }
  input[type="number"]:focus {
    background: var(--lightText);
  }
`;

export const RolledLI = styled.div`
  display: block;
  padding: 2px 50px 2px 0;
`;

export const DiceAnswers = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  align-content: baseline;
  position: relative;
  z-index: 1;
  font-weight: bold;
  cursor: default;
`;

export const MainAnswer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20px;
  left: 85%;
  font-size: 120px;
  z-index: 2;
  cursor: default;
`;
