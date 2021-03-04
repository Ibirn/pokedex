import React, { useState, useEffect } from "react";

export default function DexInfo({ currentPokemon, colors }) {
  const apimoves = currentPokemon.moves;
  const [moves, setMoves] = useState({});
  const generationArray = [
    "red-blue",
    "yellow",
    "gold-silver",
    "crystal",
    "ruby-sapphire",
    "emerald",
    "firered-leafgreen",
    "diamond-pearl",
    "platinum",
    "heartgold-soulsilver",
    "black-white",
    "colosseum",
    "xd",
    "black-2-white-2",
    "x-y",
    "omega-ruby-alpha-sapphire",
    "sun-moon",
    "ultra-sun-ultra-moon",
  ];

  useEffect(() => {
    let movesets = {
      "red-blue": {},
      yellow: {},
      "gold-silver": {},
      crystal: {},
      "ruby-sapphire": {},
      emerald: {},
      "firered-leafgreen": {},
      "diamond-pearl": {},
      platinum: {},
      "heartgold-soulsilver": {},
      "black-white": {},
      colosseum: {},
      xd: {},
      "black-2-white-2": {},
      "x-y": {},
      "omega-ruby-alpha-sapphire": {},
      "sun-moon": {},
      "ultra-sun-ultra-moon": {},
    };
    for (const key in apimoves) {
      apimoves[key].version_group_details.forEach((elem) => {
        movesets[elem.version_group.name][elem.move_learn_method.name] = {
          ...movesets[elem.version_group.name][elem.move_learn_method.name],
          [apimoves[key].move.name]: elem.level_learned_at,
        };
      });
    }
    setMoves(() => movesets);
  }, [currentPokemon]);

  useEffect(() => console.log(moves), [moves]);
  // const movesetByVersion = () => {
  // };
  // movesetByVersion();

  return <div>INFO GO HERE</div>;
}
