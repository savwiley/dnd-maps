import styled from "styled-components";

export const Chars = styled.div`
  display: inline-block;
  float: left;
  width: 25vw;
  height: auto;
  text-align: left;
  padding: 4px;
`;

export const Input = styled.div`
  input {
    padding: 2px;
    background: var(--text);
    border: 1px solid var(--background);
    cursor: pointer;
    color: var(--background);
    font-weight: bold;
    min-width: 50px;
    width: 30px;
  }
  input:hover {
    background: var(--background);
    border-color: var(--text);
    color: var(--text);
  }
`;
