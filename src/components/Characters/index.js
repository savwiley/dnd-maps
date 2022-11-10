import React, { useState } from "react";
import CharModules from "./CharModules";
import { Chars, Input, CharSpace } from "./style";

const Characters = () => {
  const [name, setName] = useState("");
  const [hp, setHP] = useState(0);
  const [armor, setArmor] = useState(0);
  const [init, setInit] = useState(0);
  const [chars, setChars] = useState({});

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
              [init]: {
                Armor: armor,
                MaxHP: hp,
                CurrentHP: hp,
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
          }}
        />
      </Input>

      <CharSpace>
        {
          /*something to put the character modules*/
          Object.entries(chars).map((e) => {
            return (
              <CharModules
                name={e[1].Name}
                armor={e[1].Armor}
                hp={e[1].MaxHP}
                curHp={e[1].CurrentHP}
                init={e[0]}
                key={e[0]}
              />
            );
          })
        }
      </CharSpace>
    </Chars>
  );
};

export default Characters;
