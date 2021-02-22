import "./App.css";
import React, { useState, useEffect } from "react";
import DisplayBox from "./components/DisplayBox";
import QueryBox from "./components/QueryBox";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({
    name: "---",
    types: [{ type: { name: "---" } }],
    order: "---",
    height: 0,
    weight: 0,
    abilities: [{ ability: { name: "---" } }],
    sprites: {
      back_default: "../assets/pokeball.png",
      front_default: "../assets/pokeball.png",
      other: {
        "official-artwork": { front_default: "../assets/pokeball-big.png" },
      },
    },
    stats: [
      { base_stat: 0 },
      { base_stat: 0 },
      { base_stat: 0 },
      { base_stat: 0 },
      { base_stat: 0 },
      { base_stat: 0 },
    ],
  });

  useEffect(() => {
    console.log(currentPokemon);
  }, [currentPokemon]);

  return (
    <div className="App">
      <QueryBox
        currentPokemon={currentPokemon}
        setCurrentPokemon={setCurrentPokemon}
      />
      <DisplayBox currentPokemon={currentPokemon} />
    </div>
  );
}

export default App;
