import React, { useState } from "react";
import CharModules from "./CharModules";
import { Chars, Input } from "./style";

const Characters = () => {
  const [name, setName] = useState("");
  const [hp, setHP] = useState(0);
  const [armor, setArmor] = useState(0);
  const [init, setInit] = useState(0);
  const [chars, setChars] = useState({});

  /**newChar array contains one character's stats
   * create function to (when newChar changes) add more modules
   * perhaps have one master object with all characters each with their own unique index
   * the init determines the index
   * make a new master object every time (1) a char is added (2) a char is edited (3) init on any changes
   */

  return (
    <Chars>
      <Input>
        <input
          type="text"
          placeholder="Name"
          className="proClear"
          onBlur={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Max HP"
          className="proClear"
          onBlur={(e) => {
            setHP(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Armor"
          className="proClear"
          onBlur={(e) => {
            setArmor(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Initiative"
          className="proClear"
          onBlur={(e) => {
            setInit(e.target.value);
          }}
        />
        <input
          type="button"
          value="Create Protag"
          onClick={() => {
            setChars({
              ...chars,
              [name]: {
                Armor: armor,
                MaxHP: hp,
                CurrentHP: hp,
                Initiative: init,
              },
            });
            document.querySelector(".proClear").value = "";
            setName("");
            setHP(0);
            setArmor(0);
            setInit(0);
          }}
        />
      </Input>

      {
        /*something to put the character modules*/
        Object.entries(char).map((e) => {
          <CharModules
            name={e[0]}
            armor={e[1].Armor}
            hp={e[1].MaxHP}
            curHp={e[1].CurrentHP}
            init={e[1].Initiative}
          />;
        })
      }
    </Chars>
  );
};

export default Characters;
