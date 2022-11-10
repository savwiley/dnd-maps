import React, { useState, useEffect } from "react";
import { CharModule } from "./style";

const CharModules = (props) => {
  const { name, hp, curHp, armor, init } = props;
  const [newHP, setNewHP] = useState(100);

  //finds percent of new HP
  useEffect(() => {
    const decimal = curHp / hp;
    const percent = decimal * 100;
    setNewHP(percent);
  },[curHp, hp]);

  return (
    <CharModule HP={newHP}
      onClick={() => {
        const cName = document.getElementById("nameInput");
        cName.value = name;
        cName.focus();
        cName.blur();
        const cCurHP = document.getElementById("curHPInput");
        cCurHP.value = curHp;
        cCurHP.focus();
        cCurHP.blur();
        const cHP = document.getElementById("maxHPInput");
        cHP.value = hp;
        cHP.focus();
        cHP.blur();
        const cArmor = document.getElementById("armorInput");
        cArmor.value = armor;
        cArmor.focus();
        cArmor.blur();
        const cInit = document.getElementById("initInput");
        cInit.value = init;
        cInit.focus();
        cInit.blur();
      }}
    >
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






/**
 * - make sure all inputs are filled
 * - make sure current HP doesn't exceed max HP
 * - make sure init is never less than 1
 * - fix spacing for inputs/button
 * - add delete
 */