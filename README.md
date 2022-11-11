# D&D Combat Map

This app will include a dynamic grid that can be colored in. Squares will be interactive to hold characters/objects/etc with interactive stats, and a built in dice roller.

[Test me here!](https://savwiley.github.io/dnd-maps/)

Wiki is incoming.

## To-Do List

* Highlight markers when characters are hovered over & vice versa.
* Allow shape change of markers.
* Show direction character is facing on marker.
* Improve marker dragging.
* Create markers without characters.
* Add style to characters.
  * Consider adding a background icon with the same color as the marker.
* Improve readability on character inputs.
  * Even just title/hover effects.
  * Consider installing React-Tooltip.
* Add option to remove grid image.

```
const roll = (amount, sides, modifier) => {
  let answerArr = [];
  let rolledArr = [];
  for (let i = 0; i < amount.length; i++) {
    for (let a = 0; a < amount[i]; a++) {
      let side;
      let mod;
      sides[i] ? (side = sides[i]) : (side = 20);
      modifier[i] ? (mod = modifier[i]) : (mod = 0);
      let diceRoll = Math.floor(Math.random() * side) + 1 + Number(mod);
      rolledArr.push(`${amount[i]}d${side}+${mod} = ${diceRoll}`);
      answerArr.push(diceRoll);
    }
  }
  setAnswer(answerArr);
  setRolled(rolledArr);
};
```

```
<GridSpace numbOfSquares={numbSq}>
  {[...Array(numbSq * numbSq)].map((a, i) => (
    <Square
      className="square"
      id={i}
      key={i}
      onClick={(e) => {
        e.target.style.background = color;
      }}
      onDragOver={(e) => {
        e.target.style.background = color;
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.target.style.background = "transparent";
      }}
    ></Square>
  ))}
</GridSpace>
```

Being made with [React ^18.2.0](https://reactjs.org/) and [Styled Components ^5.3.5](https://styled-components.com/).