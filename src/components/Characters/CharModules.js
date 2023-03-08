import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { CharModule, Exit, Edit } from "./style";

const CharModules = (props) => {
  const { name, hp, curHp, armor, init, color, setColor } = props;
  const [newHP, setNewHP] = useState(100);
  const [shownHP, setShownHP] = useState(curHp);
  const [change, setChange] = useState(0);

  const cName = document.getElementById("nameInput");
  const cCurHP = document.getElementById("curHPInput");
  const cHP = document.getElementById("maxHPInput");
  const cArmor = document.getElementById("armorInput");
  const cInit = document.getElementById("initInput");
  const cColor = document.getElementById("colorInput");

  //finds percent of new HP
  useEffect(() => {
    const decimal = shownHP / hp;
    const percent = decimal * 100;
    setNewHP(percent);
  }, [shownHP, hp]);

  return (
    <CharModule newHP={newHP} color={color} className={`${name}-${init}`}>
      <div className="name">{name}</div>
      <div className="hp">
        <div className="changeHP">
          <input 
            type="button"
            value="+"
            className="plusHP"
            onClick={() => {
              const newHp = shownHP + change;
              setShownHP(newHp)
            }}
          />
          <input 
            type="number"
            className="changeHPNumb"
            onBlur={(e) => {
              setChange(e.target.valueAsNumber);
            }}
          />
          <input 
            type="button"
            value="-"
            className="minusHP"
            onClick={() => {
              const newHp = shownHP - change;
              setShownHP(newHp)
            }}
          />
        </div>
        {shownHP} / {hp}
      </div>
      <div className="hpHolder">
        <div className="hpActual"></div>
      </div>
      <div className="armor">AC {armor}</div>
      <div className="initiative">INIT {init}</div>

      <Edit>
        <FontAwesomeIcon
          icon={faPencil}
          className="iconButton"
          onClick={() => {
            cName.value = name;
            cName.focus();
            cName.blur();
            cCurHP.value = shownHP;
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
            setColor(color);
            cColor.value = color;
          }}
        />
      </Edit>

      <Exit>
        <FontAwesomeIcon
          icon={faXmark}
          className="iconButton"
          onClick={() => {
            const elem = document.querySelectorAll(`.${name}-${init}`);
            elem.forEach((e) => {
              e.style.display = "none";
            });
          }}
        />
      </Exit>
    </CharModule>
  );
};

export default CharModules;
