import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Autocomplete({ suggestions, handleChange, query }) {
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
    <>
      <input
        type="text"
        id="search-bar"
        name="search-bar"
        placeholder="Bulbasaur"
        onChange={handleChange}
        value={query}
        autoComplete="off"
      />
      {renderSuggestions()}
    </>
  );
}
