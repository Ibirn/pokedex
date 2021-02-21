import React from "react";
import Searchbar from "./Searchbar";
import RandomPokemon from "./RandomPokemon";
import "../styles/queryBoxStyle.scss";

export default function SearchBox({ setCurrentPokemon, currentPokemon }) {
  return (
    <div className="query-frame">
      <div>
        <Searchbar setCurrentPokemon={setCurrentPokemon} />
      </div>
      <RandomPokemon
        currentPokemon={currentPokemon}
        setCurrentPokemon={setCurrentPokemon}
      />
    </div>
  );
}
