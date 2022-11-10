import styled from "styled-components";

export const Chars = styled.div`
  display: inline-block;
  float: left;
  width: 30vw;
  height: auto;
  text-align: left;
  padding: 4px;
`;

export const Input = styled.div`
  padding: 10px 0 0 10px;
  input {
    margin-right: 5px;
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

export const CharSpace = styled.div`
  width: 30vw;
  height: 90vh;
  overflow-y: scroll;
`;

export const Exit = styled.div`
  display: none;
  position: relative;
  float: right;
  bottom: 60px;
  left: 60px;
  background: var(--text);
  color: var(--background);
  opacity: 0.3;
  font-size: 18px;
  border-radius: 50px;
  padding: 5px 8px 3px;
  text-align: center;
  :hover {
    opacity: 0.8;
  }
`;

export const Edit = styled.div`
  display: none;
  position: relative;
  float: right;
  top: 10px;
  left: 89px;
  background: var(--text);
  color: var(--background);
  opacity: 0.3;
  font-size: 18px;
  border-radius: 50px; 
  padding: 5px 6px 4px;
  text-align: center;
  :hover {
    opacity: 0.8;
  }
`;

export const CharModule = styled.div`
  display: block;
  width: 90%;
  border-radius: 10px;
  background: var(--lightAccent);
  height: 70px;
  margin: 10px 5px;
  padding: 5px 10px;
  font-weight: bold;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  .name {
    font-size: 20px;
    font-weight: bold;
    float: left;
  }
  .hp {
    float: right;
  }
  .hpHolder {
    display: block;
    width: 100%;
    border-radius: 5px;
    height: 5px;
    border: 1px solid var(--background);
    background: var(--background);
    margin: 30px 0 10px;
    overflow: hidden;
  }
  .hpActual {
    width: ${(props) => props.HP}%;
    height: 5px;
    background: var(--lightText);
    border-radius: 5px;
  }
  .armor {
    float: left;
  }
  .initiative {
    float: right;
  }
  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }
  &:hover ${Exit} {
    display: inline;
  }
  &:hover ${Edit} {
    display: inline;
  }
`;