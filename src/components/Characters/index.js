import React, { useState } from "react";
import { Chars, Input } from "./style";

const Characters = () => {
  const [name, setName] = useState();
  const [armor, setArmor] = useState();

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
          type="text"
          placeholder="Armor"
          className="proClear"
          onBlur={(e) => {
            setArmor(e.target.value);
          }}
        />
        <input
          type="button"
          value="Create Protag"
          onClick={() => {
            document.querySelector(".proClear").value = "";
          }}
        />
      </Input>
    </Chars>
  )
};

export default Characters;