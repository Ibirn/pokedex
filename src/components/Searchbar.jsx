import React, { useState } from "react";
import axios from "axios";

export default function Searchbar(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value.trim());
  };

  const querySubmit = (e) => {
    e.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`).then((response) => {
      console.log(response.data);
    });
  };
  //https://pokeapi.co/api/v2/pokemon/
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
