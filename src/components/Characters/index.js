import React, { useState } from "react";
import CharModules from "./CharModules";
import Marker from "./Markers";
import { Chars, Input, CharSpace } from "./style";

const Characters = () => {
  const [name, setName] = useState("");
  const [hp, setHP] = useState(0);
  const [curHp, setCurHP] = useState(0);
  const [armor, setArmor] = useState(0);
  const [init, setInit] = useState(0);
  const [chars, setChars] = useState({});

  return (
    <Chars>
      <Input>
        <form onSubmit={() => "return false"}>
          <input
            type="text"
            placeholder="Name"
            id="nameInput"
            className="proClear"
            onBlur={(e) => {
              if (e.target.value !== "") {
                setName(e.target.value);
              }
            }}
          />
          <input
            type="number"
            placeholder="Current HP"
            id="curHPInput"
            className="proClear"
            min="0"
            onBlur={(e) => {
              if (e.target.valueAsNumber >= 0) {
                setCurHP(e.target.value);
              }
            }}
          />
          <input
            type="number"
            placeholder="Max HP"
            id="maxHPInput"
            className="proClear"
            min={curHp}
            onBlur={(e) => {
              if (e.target.valueAsNumber >= 1 && e.target.valueAsNumber >= curHp) {
                setHP(e.target.value);
              } else {
                alert("Your Max HP cannot be less than your Current HP.");
                e.target.value = "";
              }
            }}
          />
          <input
            type="number"
            placeholder="Armor"
            id="armorInput"
            className="proClear"
            min="0"
            onBlur={(e) => {
              if (e.target.valueAsNumber >= 0) {
                setArmor(e.target.value);
              }
            }}
          />
          <input
            type="number"
            placeholder="Initiative"
            id="initInput"
            className="proClear"
            min="0"
            onBlur={(e) => {
              if (e.target.valueAsNumber >= 0) {
                setInit(e.target.value);
              }
            }}
          />
          <input
            type="submit"
            value="Create"
            onClick={(e) => {
              if (init && armor && hp && curHp && name) {
                setChars({
                  ...chars,
                  [init]: {
                    Armor: armor,
                    MaxHP: hp,
                    CurrentHP: curHp,
                    Name: name,
                  },
                });
                const arr = document.querySelectorAll(".proClear");
                arr.forEach((e) => {
                  e.value = "";
                });
                setName("");
                setHP(0);
                setArmor(0);
                setInit(0);
                e.preventDefault();
              } else {
                alert("Please fill in all fields.");
                e.preventDefault();
              }
            }}
          />
        </form>
      </Input>

      <CharSpace>
        {Object.entries(chars).map((e) => {
            return (
              <div key={e[0]}>
                <CharModules
                  name={e[1].Name}
                  armor={e[1].Armor}
                  hp={e[1].MaxHP}
                  curHp={e[1].CurrentHP}
                  init={e[0]}
                />
                <Marker
                  name={e[1].Name}
                />
              </div>
            );
          })
        }
      </CharSpace>
    </Chars>
  );
};

export default Characters;
