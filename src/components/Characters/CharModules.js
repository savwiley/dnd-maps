import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { CharModule, Exit, Edit } from "./style";

const CharModules = (props) => {
  const { name, hp, curHp, armor, init } = props;
  const [newHP, setNewHP] = useState(100);

  const cName = document.getElementById("nameInput");
  const cCurHP = document.getElementById("curHPInput");
  const cHP = document.getElementById("maxHPInput");
  const cArmor = document.getElementById("armorInput");
  const cInit = document.getElementById("initInput");

  //finds percent of new HP
  useEffect(() => {
    const decimal = curHp / hp;
    const percent = decimal * 100;
    setNewHP(percent);
  },[curHp, hp]);

  return (
    <CharModule HP={newHP} className={name}
    /*
      onClick={() => {
        cName.value = name;
        cName.focus();
        cName.blur();
        cCurHP.value = curHp;
        cCurHP.focus();
        cCurHP.blur();
        cHP.value = hp;
        cHP.focus();
        cHP.blur();
        cArmor.value = armor;
        cArmor.focus();
        cArmor.blur();
        cInit.value = init;
        cInit.focus();
        cInit.blur();
      }}
      */
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

      <Exit>
        <FontAwesomeIcon
          icon={faXmark}
          className="iconButton"
          onClick={() => {
            document.querySelector(`.${name}`).style.display = "none";
          }}
        />
      </Exit>

      <Edit>
        <FontAwesomeIcon
          icon={faPencil}
          className="iconButton"
          onClick={() => {
            cName.value = name;
            cName.focus();
            cName.blur();
            cCurHP.value = curHp;
            cCurHP.focus();
            cCurHP.blur();
            cHP.value = hp;
            cHP.focus();
            cHP.blur();
            cArmor.value = armor;
            cArmor.focus();
            cArmor.blur();
            cInit.value = init;
            cInit.focus();
            cInit.blur();
          }}
        />
      </Edit>
    </CharModule>
  );
};

export default CharModules;






/**
 * - add delete
 */