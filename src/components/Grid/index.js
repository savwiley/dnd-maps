import React, { useState } from "react";
import { GridBox, GridSpace, Square } from "./style";

const Grid = () => {
  const [color, setColor] = useState("#000000");
  const [numb, setNumb] = useState(16);
  const [numbSq, setNumbSq] = useState(16);


  return (
    <GridBox>

      {/*change color*/}
      <input 
        type="color"
        id="color"
        value={color}
        onChange={e => {
          setColor(e.target.value);
        }}
      />

      {/*change grid size*/}
      <input
        type="number"
        id="number"
        defaultValue={numb}
        onBlur={(e) => {
          setNumb(e.target.value);
        }}
      />
      <input
        type="button"
        value="Resize"
        onClick={() => {
          setNumbSq(numb);
          document.querySelector("#number").value = "";
        }}
      />

      <GridSpace numbOfSquares={numbSq}>
        {[...Array(numbSq * numbSq)].map((e, i) => (
          <Square
            className="square"
            id={i}
            key={i}
          ></Square>
        ))}
      </GridSpace>

    </GridBox>
  );
};

export default Grid;
