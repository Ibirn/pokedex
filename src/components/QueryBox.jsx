import React from "react";
import Searchbar from "./Searchbar";
import RandomPokemon from "./RandomPokemon";
import "../styles/queryBoxStyle.scss";

export default function SearchBox({ setCurrentPokemon, currentPokemon }) {
  return (
    <div className="query-frame">
      <Searchbar setCurrentPokemon={setCurrentPokemon} />
      <RandomPokemon
        currentPokemon={currentPokemon}
        setCurrentPokemon={setCurrentPokemon}
      />
    </div>
  );
}
