import React, { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";
import "../styles/randomPokemonStyle.scss";

export default function RandomPokemon({ setCurrentPokemon, currentPokemon }) {
  const [visitors, setVisitors] = useState({});

  //pull 6 random pokemon to display to users
  useEffect(() => {
    const randomId = () => {
      return Math.floor(Math.random() * 898 + 1);
    };

    for (let i = 0; i < 6; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomId()}`)
        .then((response) => {
          setVisitors((prev) => ({
            ...prev,
            [response.data.name]: response.data.sprites.front_default,
          }));
        });
    }
    return () => {
      setVisitors({});
    };
  }, [currentPokemon]);

  //makes random pokemon clickable links for the pokedex
  const querySubmit = (e, name) => {
    e.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setCurrentPokemon(response.data);
    });
  };

  const generateHeadshots = () => {
    if (_.keys(visitors).length === 0) {
      return null;
    }
    return (
      <>
        {_.keys(visitors).map((elem, ind) => (
          <div
            key={ind}
            onClick={(e) => querySubmit(e, elem)}
            className="headshot"
          >
            <img className="headshot-image" src={visitors[elem]} alt={elem} />
            <h5>{elem ? elem : "Loading..."}</h5>
          </div>
        ))}
      </>
    );
  };

  return <div className="flex-wrapper">{generateHeadshots()}</div>;
}
