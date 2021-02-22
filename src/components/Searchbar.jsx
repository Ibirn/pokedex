import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import "../styles/searchbarStyle.scss";

export default function Searchbar({ setCurrentPokemon }) {
  const [query, setQuery] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [error, setError] = useState(false);

  //check if the even was inside the autocomplete
  const catchBubble = (e) => {
    for (let elem of e.path) {
      if (elem.className === "search-wrapper") {
        return true;
      }
    }
    return false;
  };

  //show autocomplete while input is focused
  const show = () => {
    setError(false);
    setIsShown(true);
  };

  //hide autocomplete if the click is outside of the search-wrapper, otherwise, let the event pass.
  const handleClick = (e) => {
    if (e.target && !catchBubble(e)) {
      return setIsShown(false);
    }
  };

  //create master list of pokemon to sort through for autocomplete, add event listeners to control the autocomplete showing/hiding
  useEffect(() => {
    document.getElementById("search-bar").addEventListener("focus", show);
    window.addEventListener("click", handleClick);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=1200`)
      .then((response) => {
        let list = response.data.results.map((elem) => elem.name);
        setPokemonList(list);
      });
    return () => {
      window.removeEventListener("click", handleClick);
    };
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
    e.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${_.lowerCase(query)}`)
      .then((response) => {
        setCurrentPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  //select an item from suggestions
  const selectSuggestion = (value) => {
    setQuery(() => value);
    setSuggestions(() => []);
  };

  //render pokemon whose name contains the query string
  //lodash capitalize used here so that proper names are capitalized on client side though they need to be returned to lower case for API query
  const renderSuggestions = () => {
    if (isShown) {
      if (suggestions.length === 0) {
        return null;
      }
      return (
        <ul>
          {suggestions.map((elem, ind) => (
            <li
              onClick={(e) => {
                selectSuggestion(_.capitalize(elem));
              }}
              key={ind}
            >
              {_.capitalize(elem)}
            </li>
          ))}
        </ul>
      );
    }
  };

  //popup for anything going wrong with the API request
  const renderError = () => {
    return (
      <div className="error">
        <p>Something has gone wrong!</p>
        <p>Please try a different Pokemon.</p>
      </div>
    );
  };

  return (
    <div className="search-wrapper">
      <div>
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
          </form>
          <button onClick={(e) => querySubmit(e)}>Search</button>
        </div>
        <div>{renderSuggestions()}</div>
      </div>
      {error && renderError()}
    </div>
  );
}
