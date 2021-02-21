import React, { useEffect, useState } from "react";
import Headshot from "./Headshot";
import _ from "lodash";
import axios from "axios";
import "../styles/randomPokemonStyle.scss";

export default function RandomPokemon(props) {
  const [visitors, setVisitors] = useState({});

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
  }, []);

  const generateHeadshots = () => {
    if (_.keys(visitors).length === 0) {
      return null;
    }
    return (
      <>
        {_.keys(visitors).map((elem, ind) => (
          <Headshot key={ind} address={visitors[elem]} name={elem} />
        ))}
      </>
    );
  };

  useEffect(() => {
    console.log(visitors);
  }, [visitors]);

  return <div className="flex-wrapper">{generateHeadshots()}</div>;
}
