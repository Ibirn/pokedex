import "./App.css";
import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import DisplayBox from "./components/DisplayBox";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    console.log(currentPokemon);
  }, [currentPokemon]);
  return (
    <div className="App">
      <Searchbar setCurrentPokemon={setCurrentPokemon} />
      <DisplayBox currentPokemon={currentPokemon} />
    </div>
  );
}

export default App;
