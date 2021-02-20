import React, { useEffect, useState } from "react";
import _ from "lodash";
// Specifically, the card should have at least the pokemon name, height, weight, type(s), abilities and base stats (hp/atk/def/special-atk/special-def/speed)
//Make your styling awesome. Try to match the pokemon type with the style of the card (eg. red/green etc.). Also, try to style the pokemon stats since they are numeric
// Have a way to show/click through all the sprites of each pokemon, instead of just showing one

export default function DisplayBox({ currentPokemon }) {
  const [sprites, setSprites] = useState([]);
  const [spriteIndex, setSpriteIndex] = useState(0);

  const spriteSelector = (int) => {
    if (spriteIndex + int > sprites.length - 1) {
      setSpriteIndex(0);
    } else if (spriteIndex + int < 0) {
      setSpriteIndex(sprites.length - 1);
    } else {
      setSpriteIndex((prev) => prev + int);
    }
  };

  useEffect(() => {
    //use Lodash to get list of sprites in data
    //set new sprites when currentPokemon changes.
    const spriteList = _.values(_.pickBy(currentPokemon.sprites, _.isString));
    setSprites(spriteList);
    setSpriteIndex(0);
    console.log(sprites[0]);
  }, [currentPokemon]);

  return (
    <div className="display-border">
      <p>{currentPokemon.name}</p>
      <div>
        <button onClick={() => spriteSelector(-1)}>prev</button>
        <img src={sprites[spriteIndex]} alt={`${currentPokemon.name}`} />
        <button onClick={() => spriteSelector(1)}>next</button>
      </div>
    </div>
  );
}
