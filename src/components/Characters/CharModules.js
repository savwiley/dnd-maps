import React, { useState } from "react";
import { CharModule } from "./style";

const CharModules = (props) => {
  const { name, hp, curHp, armor, init } = props;
  const [newHP, setNewHP] = useState(100);

  //finds percent of new HP
  const changeHP = (hit) => {
    const total = curHp - hit;
    const decimal = total / hp;
    const percent = decimal * 100;
    setNewHP(percent);
  };

  return (
    <CharModule HP={newHP}>
      {/*name*/}
      <div className="name">{name}</div>
      {/*HP*/}
      <div className="hp">
        {curHp} / {hp}
      </div>
      {/*HP scale*/}
      <div className="hpHolder">
        <div className="hpActual"></div>
      </div>
      {/*armor*/}
      <div className="armor">AC {armor}</div>
      {/*initiative*/}
      <div className="initiative">INIT {init}</div>
    </CharModule>
  );
};

export default CharModules;
