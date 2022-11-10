import styled from "styled-components";

export const GridBox = styled.div`
  position: fixed;
  right: 40px;
  width: 100vh;
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
  }
  #row {
    display: flex;
    justify-content: center;
    margin: 10px auto 0;
    input {
      margin-right: 5px;
    }
  }
  input[type="file"] {
    width: 87px;
    cursor: pointer;
  }
  input:hover {
    background: var(--background);
    border-color: var(--text);
    color: var(--text);
  }
`;

export const GridSpace = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numbOfSquares}, 1fr);
  grid-template-rows: repeat(${(props) => props.numbOfSquares}, 1fr);
  width: 100%;
  height: 83vh;
  overflow: hidden;
`;

export const Square = styled.div`
  border: 1px solid var(--background);
  cursor: pointer;
  width: 100%;
  height: 100%;
`;
