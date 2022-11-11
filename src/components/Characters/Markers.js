import React, { useState } from "react";
import { Mark } from "./style";

const Marker = (props) => {
  const { name, color } = props;
  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(0);
  const [pos3, setPos3] = useState(0);
  const [pos4, setPos4] = useState(0);
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(500);
  const [moving, setMoving] = useState(false);

  return (
    <Mark top={top} left={left} color={color}
      onMouseDown={(e) => {
        e = e || window.event;
        e.preventDefault();
        setPos3(e.clientX);
        setPos4(e.clientY);
        setMoving(true);
      }}
      onMouseUp={() => {
        setMoving(false);
      }}
      onMouseMove={(e) => {
        e = e || window.event;
        e.preventDefault();
        const dimensions = e.target.getBoundingClientRect();
        if (moving) {
          setPos1(pos3 - e.clientX);
          setPos2(pos4 - e.clientY);
          setPos3(e.clientX);
          setPos4(e.clientY);
          setTop(dimensions.top - pos2);
          setLeft(dimensions.left - pos1);
        }
      }}
    >
      {name}
    </Mark>
  )
};

export default Marker;






/**
 * - https://www.w3schools.com/howto/howto_js_draggable.asp
 */