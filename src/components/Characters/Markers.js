import React, { useState/*, useEffect*/ } from "react";
import { Mark } from "./style";

const Marker = (props) => {
  const { name } = props;
  /*
  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(0);
  const [pos3, setPos3] = useState(0);
  const [pos4, setPos4] = useState(0);
  */
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(300);
  const [moving, setMoving] = useState(false);

  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

  return(
    <Mark top={top} left={left}
      onMouseDown={(e) => {
        e = e || window.event;
        e.preventDefault();
        console.log(e.clientX);
        pos3 = e.clientX;
        pos4 = e.clientY;
        /*
        setPos3(e.clientX);
        setPos4(e.clientY);
        */
        setMoving(true);
      }}
      onMouseUp={() => {
        setMoving(false);
      }}
      onMouseMove={(e) => {
        e = e || window.event;
        e.preventDefault();
        if (moving) {
          //the new cursor position
          /*
          setPos1(pos3 - e.clientX);
          setPos2(pos4 - e.clientY);
          setPos3(e.clientX);
          setPos4(e.clientY);
          */
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          //new element position
          setTop(e.offsetTop - pos2);
          setLeft(e.offsetLeft - pos1);
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