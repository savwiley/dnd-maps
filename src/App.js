import React from "react";
import Grid from "./components/Grid/index.js";
import Dice from "./components/Dice/index.js";
import Characters from "./components/Characters/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <Characters />
      <Grid />
      <Dice />
      <a href="https://github.com/savwiley/dnd-maps" className="github">
        <FontAwesomeIcon icon={faSquareGithub} />
      </a>
    </div>
  );
}

export default App;
