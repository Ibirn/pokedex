import React, { useState } from "react";
import axios from "axios";

export default function Autocomplete(props) {
  const [pokemonList, setPokemonList] = useState([]);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=1200`)
    .then((response) => console.log("???", response.data));

  return (
    <>
      <div>
        <input></input>
      </div>
    </>
  );
}
