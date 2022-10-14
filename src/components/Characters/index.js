import React, { useState } from "react";
import { Protags, Antags, Input } from "./style";

export const Protagonists = () => {
  const [name, setName] = useState();
  const [armor, setArmor] = useState();

  return (
    <Protags>
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
    </Protags>
  )
};


export const Antagonists = () => {
  const [name, setName] = useState();
  const [armor, setArmor] = useState();

  return (
    <Antags>
      <Input>
        <input
          type="text"
          placeholder="Name"
          className="antClear"
          onBlur={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Armor"
          className="antClear"
          onBlur={(e) => {
            setArmor(e.target.value);
          }}
        />
        <input
          type="button"
          value="Create Antag"
          onClick={() => {
            document.querySelector(".antClear").value = "";
          }}
        />
      </Input>
    </Antags>
  )
};