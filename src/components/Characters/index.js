import React, { useState } from "react";
import { Chars, Input } from "./style";

const Characters = () => {
  const [name, setName] = useState();
  const [hp, setHP] = useState();
  const [armor, setArmor] = useState();
  const [init, setInit] = useState();
  const [newChar, setNewChar] = useState([]);

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
            setNewChar([name, hp, armor, init]);
            document.querySelector(".proClear").value = "";
          }}
        />
      </Input>

      {/*something to put the character modules*/}
    </Chars>
  )
};

export default Characters;