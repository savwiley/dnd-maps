import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { CharModule, Exit, Edit } from "./style";

const CharModules = (props) => {
  const { name, hp, curHp, armor, init, color } = props;
  const [newHP, setNewHP] = useState(100);

  const cName = document.getElementById("nameInput");
  const cCurHP = document.getElementById("curHPInput");
  const cHP = document.getElementById("maxHPInput");
  const cArmor = document.getElementById("armorInput");
  const cInit = document.getElementById("initInput");
  const cColor = document.getElementById("colorInput");

  //finds percent of new HP
  useEffect(() => {
    const decimal = curHp / hp;
    const percent = decimal * 100;
    setNewHP(percent);
  }, [curHp, hp]);

  return (
    <CharModule newHP={newHP} className={name}>
      <div className="name">{name}</div>
      <div className="hp">
        {curHp} / {hp}
      </div>
      <div className="hpHolder">
        <div className="hpActual"></div>
      </div>
      <div className="armor">AC {armor}</div>
      <div className="initiative">INIT {init}</div>

      <Exit>
        <FontAwesomeIcon
          icon={faXmark}
          className="iconButton"
          onClick={() => {
            const elem = document.querySelectorAll(`.${name}`);
            elem.forEach((e) => {
              e.style.display = "none";
            });
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
            cColor.value = color;
          }}
        />
      </Edit>
    </CharModule>
  );
};

export default CharModules;
