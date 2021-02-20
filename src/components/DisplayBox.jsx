import React, { useEffect, useState } from "react";
import _ from "lodash";
import styled from "@emotion/styled";
// Specifically, the card should have at least the pokemon name, height, weight, type(s), abilities and base stats (hp/atk/def/special-atk/special-def/speed)
//Make your styling awesome. Try to match the pokemon type with the style of the card (eg. red/green etc.). Also, try to style the pokemon stats since they are numeric
// Have a way to show/click through all the sprites of each pokemon, instead of just showing one

export default function DisplayBox({ currentPokemon }) {
  const [sprites, setSprites] = useState([]);
  const [spriteIndex, setSpriteIndex] = useState(0);
  const [borderColours, setBorderColours] = useState([]);
  const typeColours = {
    bug: "A8B820",
    dark: "705848",
    dragon: "7038F8",
    electric: "F8D030",
    fairy: "EE99AC",
    fire: "F08030",
    fighting: "C03028",
    flying: "A890F0",
    ghost: "705898",
    grass: "78C850",
    ground: "E0C068",
    ice: "98D8D8",
    normal: "A8A878",
    poison: "A040A0",
    psychic: "F85888",
    rock: "B8A038",
    steel: "B8B8D0",
    water: "6890F0",
  };

  const Border = styled.div`
    border-left: 1rem #${borderColours[0]} solid;
    border-top: 1rem #${borderColours[0]} solid;
    border-right: 1rem #${borderColours[1]
        ? borderColours[1]
        : borderColours[0]} solid;
    border-bottom: 1rem #${borderColours[1]
        ? borderColours[1]
        : borderColours[0]} solid;
  `;

  const spriteSelector = (int) => {
    if (spriteIndex + int > sprites.length - 1) {
      setSpriteIndex(0);
    } else if (spriteIndex + int < 0) {
      setSpriteIndex(sprites.length - 1);
    } else {
      setSpriteIndex((prev) => prev + int);
    }
  };

  const borderSelector = () => {
    let output = [];
    for (let type of currentPokemon.types) {
      output.push(typeColours[type.type.name]);
    }
    setBorderColours([...output]);
  };

  useEffect(() => {
    //use Lodash to get list of sprites in data
    //set new sprites when currentPokemon changes.
    const spriteList = _.values(_.pickBy(currentPokemon.sprites, _.isString));
    setSprites(spriteList);
    setSpriteIndex(0);
    console.log(sprites[0]);

    if (currentPokemon.name) {
      console.log(borderSelector());
    }
  }, [currentPokemon]);

  return (
    <div className="display-border">
      <p>{currentPokemon.name}</p>
      <Border>
        <button onClick={() => spriteSelector(-1)}>prev</button>
        <img src={sprites[spriteIndex]} alt={`${currentPokemon.name}`} />
        <button onClick={() => spriteSelector(1)}>next</button>
      </Border>
    </div>
  );
}
