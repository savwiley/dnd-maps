import styled from "styled-components";

export const GridBox = styled.div`
  margin: auto;
  width: 65vh;
  text-align: center;
  input {
    margin: 5px 3px;
    padding: 2px;
    background: var(--text);
    border: 1px solid var(--background);
    cursor: pointer;
    color: var(--background);
    font-weight: bold;
    min-width: 50px;
    width: 30px;
  }
  input[type="color"] {
    display: block;
    margin: 10px auto 0;
  }
  input:hover {
    background: var(--background);
    border-color: var(--text);
    color: var(--text);
  }
`;

export const GridSpace = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.numbOfSquares}, 1fr);
  grid-template-rows: repeat(${props => props.numbOfSquares}, 1fr);
  width: 100%;
  height: 65vh;
  border: 1px solid var(--lightText);
`;

export const Square = styled.div`
  border: 1px solid var(--lightAccent);
  cursor: pointer;
  width: 100%;
  height: 100%;
`;