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
      <input
        type="button"
        value="Cover"
        onClick={() => {
          document.querySelectorAll(".square").forEach((e) => {
            e.style.background = color;
          });
        }}
      />
      <input
        type="button"
        value="Clear"
        onClick={() => {
          document.querySelectorAll(".square").forEach((e) => {
            e.style.background = "transparent";
          });
        }}
      />

      <GridSpace numbOfSquares={numbSq}>
        {[...Array(numbSq * numbSq)].map((a, i) => (
          <Square
            className="square"
            id={i}
            key={i}
            onClick={e => {
              e.target.style.background = color;
            }}
            onDragOver={e => {
              e.target.style.background = color;
            }}
            onContextMenu={e => {
              e.preventDefault();
              e.target.style.background = "transparent";
            }}
          ></Square>
        ))}
      </GridSpace>

    </GridBox>
  );
};

export default Grid;
