import React from "react";
import Searchbar from "./Searchbar";
import RandomPokemon from "./RandomPokemon";

import { Link } from "react-router-dom";
import "../../styles/queryBoxStyle.scss";

export default function SearchBox({ setCurrentPokemon, currentPokemon }) {
  return (
    <div className="query-frame">
      <div>
        <Searchbar setCurrentPokemon={setCurrentPokemon} />
        {/* <Link to={"/dex"}>
          <button>AECHELLO</button>
        </Link> */}
      </div>
      <RandomPokemon
        currentPokemon={currentPokemon}
        setCurrentPokemon={setCurrentPokemon}
      />
    </div>
  );
}
