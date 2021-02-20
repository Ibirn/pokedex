import React, { useEffect, useState } from "react";
import axios from "axios";
import Autocomplete from "./Autocomplete";

export default function Searchbar({ setCurrentPokemon }) {
  const [query, setQuery] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  //create master list of pokemon to sort through for autocomplete
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=1200`)
      .then((response) => {
        let list = response.data.results.map((elem) => elem.name);
        setPokemonList(list);
      });
  }, []);

  //handle text value changes, update autocomplete suggestions
  const handleChange = (e) => {
    setQuery(e.target.value.trim().toLowerCase());
    let filteredSuggestions = pokemonList
      .sort()
      .filter(
        (suggestion) =>
          suggestion
            .toLowerCase()
            .indexOf(e.target.value.trim().toLowerCase()) > -1
      );
    setSuggestions([...filteredSuggestions]);
  };

  //send request to pokeapi for a single pokemon's info
  const querySubmit = (e) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`).then((response) => {
      setCurrentPokemon(response.data);
    });
  };

  //render pokemon whose name contains the query string
  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((elem, ind) => (
          <li key={ind}>{elem}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <form>
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          placeholder="Bulbasaur"
          onChange={handleChange}
          autoComplete={"off"}
          value={query}
        />
        <button onClick={(e) => querySubmit(e)}>Search</button>
      </form>
      {renderSuggestions()}
    </div>
  );
}
