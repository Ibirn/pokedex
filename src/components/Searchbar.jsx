import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Searchbar({ setCurrentPokemon }) {
  const [query, setQuery] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  // console.log(props);

  const handleChange = (e) => {
    setQuery(e.target.value.trim().toLowerCase());
    let filteredSuggestions = pokemonList.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(e.target.value.trim().toLowerCase()) >
        -1
    );
    setSuggestions([...filteredSuggestions]);
  };

  const querySubmit = (e) => {
    e.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`).then((response) => {
      // console.log(response.data);
      setCurrentPokemon(response.data);
    });
  };
  //https://pokeapi.co/api/v2/pokemon/

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=1200`)
      .then((response) => {
        let list = response.data.results.map((elem) => elem.name);
        setPokemonList(list);
      });
  }, []);

  useEffect(() => {
    console.log("SUGG: ", suggestions);
  }, [suggestions]);

  return (
    <div>
      <form>
        <input
          type="text"
          name="search-bar"
          placeholder="Bulbasaur"
          onChange={handleChange}
        />
        <button onClick={(e) => querySubmit(e)}>Search</button>
      </form>
    </div>
  );
}
