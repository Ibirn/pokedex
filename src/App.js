import "./App.css";
import React, { useState, useEffect } from "react";
import DisplayBox from "./components/DisplayBox";
import QueryBox from "./components/QueryBox";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});

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
