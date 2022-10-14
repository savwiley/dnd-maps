import React from "react";
import Grid from "./components/Grid/index.js";
import Dice from "./components/Dice/index.js";
import {Protagonists, Antagonists} from "./components/Characters/index.js";

function App() {
  return (
    <div>
      <Protagonists />
      <Antagonists />
      <Grid />
      <Dice />
    </div>
  );
}

export default App;
