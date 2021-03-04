import "./App.css";
import React, { useState } from "react";
import DisplayBox from "./components/StatsPane/DisplayBox";
import QueryBox from "./components/NavPane/QueryBox";
import { BrowserRouter, Route } from "react-router-dom";

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
  // <BrowserRouter>
  //   <Route
  //     exact
  //     path="/"
  //     render={(props) => }
  //   />
  // </BrowserRouter>

  return (
    <div className="App">
      <BrowserRouter>
        <QueryBox
          currentPokemon={currentPokemon}
          setCurrentPokemon={setCurrentPokemon}
        />
        <DisplayBox currentPokemon={currentPokemon} />
      </BrowserRouter>
    </div>
  );
}

export default App;
