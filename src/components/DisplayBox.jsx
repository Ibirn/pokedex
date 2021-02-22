import React, { useEffect, useState } from "react";
import _ from "lodash";
import styled from "@emotion/styled";
import "../styles/displayStyle.scss";

import StatTable from "./StatTable";
import axios from "axios";
// Specifically, the card should have at least the pokemon name, height, weight, type(s), abilities and base stats (hp/atk/def/special-atk/special-def/speed)
//Make your styling awesome. Try to match the pokemon type with the style of the card (eg. red/green etc.). Also, try to style the pokemon stats since they are numeric
// Have a way to show/click through all the sprites of each pokemon, instead of just showing one

export default function DisplayBox({ currentPokemon }) {
  const [sprites, setSprites] = useState([{ front: null, back: null }]);
  const [borderColours, setBorderColours] = useState([]);
  const [spriteIndex, setSpriteIndex] = useState(0);
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
    "---": "523c40",
  };

  //creates a coloured border based on pokemon types
  const Border = styled.div`
    border-left: 1rem #${borderColours[0]} solid;
    border-top: 1rem #${borderColours[0]} solid;
    border-right: 1rem #${borderColours[1]
        ? borderColours[1]
        : borderColours[0]} solid;
    border-bottom: 1rem #${borderColours[1]
        ? borderColours[1]
        : borderColours[0]} solid;

    height: 100%;
  `;

  //Allows for sprites to be cycled
  const spriteSelector = (int) => {
    if (spriteIndex + int > sprites.length - 1) {
      setSpriteIndex(0);
    } else if (spriteIndex + int < 0) {
      setSpriteIndex(sprites.length - 1);
    } else {
      setSpriteIndex((prev) => prev + int);
    }
  };

  //helper function to set border colours
  const borderSelector = () => {
    let output = [];
    for (let type of currentPokemon.types) {
      output.push(typeColours[type.type.name]);
    }
    setBorderColours([...output]);
  };

  useEffect(() => {
    setSprites(() => [
      {
        front: currentPokemon.sprites.front_default,
        back: currentPokemon.sprites.back_default,
      },
      {
        front: currentPokemon.sprites.front_female,
        back: currentPokemon.sprites.back_female,
      },
      {
        front: currentPokemon.sprites.front_shiny,
        back: currentPokemon.sprites.back_shiny,
      },
      {
        front: currentPokemon.sprites.front_shiny_female,
        back: currentPokemon.sprites.back_shiny_female,
      },
    ]);
    borderSelector();
  }, [currentPokemon]);

  return (
    <div className="display-frame">
      <Border>
        <div className="display-top">
          <div className="hero-image">
            <p># {_.capitalize(currentPokemon.id)}</p>
            <img
              className="official-artwork"
              src={
                currentPokemon.sprites.other["official-artwork"].front_default
              }
              alt={currentPokemon.name}
            />
          </div>
          <div className="sprite-wrapper">
            <div className="sprite-artwork">
              <div>
                <div className="filler"></div>
                <img
                  src={
                    sprites[spriteIndex].front
                      ? sprites[spriteIndex].front
                      : "/assets/pokeball.png"
                  }
                  alt={`${currentPokemon.name}_sprite_front`}
                />
              </div>
              <div>
                <img
                  src={
                    sprites[spriteIndex].back
                      ? sprites[spriteIndex].back
                      : "/assets/pokeball.png"
                  }
                  alt={`${currentPokemon.name}_sprite_back`}
                />
                <div className="filler"></div>
              </div>
            </div>
            <div>
              <span>
                <button onClick={() => spriteSelector(-1)}>Back</button>
                <button onClick={() => spriteSelector(1)}>Next</button>
              </span>
            </div>
          </div>
        </div>
        <StatTable currentPokemon={currentPokemon} colors={borderColours} />
      </Border>
    </div>
  );
}
