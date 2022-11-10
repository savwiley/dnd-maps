import React, { useState } from "react";
import { GridBox, GridSpace, Square } from "./style";

const Grid = () => {
  const [color, setColor] = useState("#000000");
  const [numb, setNumb] = useState(16);
  const [numbSq, setNumbSq] = useState(16);

  return (
    <GridBox>
      <div id="row">
        {/*change color*/}
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />

        {/*upload image*/}
        <input
          type="file"
          id="file"
          accept=".jpg,.jpeg,.png,.tif,.tiff,.bmp,.gif"
          onChange={(e) => {
            console.log(e);
            console.log(e.target.files);
            const gridBG = document.querySelector("#grid");
            const image = e.target.files[0];
            gridBG.style.background = `center/contain url(${URL.createObjectURL(image)}) no-repeat`;
          }}
        />
      </div>

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

      {/*cover grid in selected color*/}
      <input
        type="button"
        value="Fill"
        onClick={() => {
          document.querySelectorAll(".square").forEach((e) => {
            e.style.background = color;
          });
        }}
      />

      {/*clear grid*/}
      <input
        type="button"
        value="Clear"
        onClick={() => {
          document.querySelectorAll(".square").forEach((e) => {
            e.style.background = "transparent";
          });
        }}
      />

      <GridSpace id="grid" numbOfSquares={numbSq}>
        {[...Array(numbSq * numbSq)].map((a, i) => (
          <Square
            className="square"
            id={i}
            key={i}
            onClick={(e) => {
              e.target.style.background = color;
            }}
            onDragOver={(e) => {
              e.target.style.background = color;
            }}
            onContextMenu={(e) => {
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
