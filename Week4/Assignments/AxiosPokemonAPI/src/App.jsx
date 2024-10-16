import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Importing the CSS file

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((err) => {
        console.error("Error fetching Pokémon data:", err);
      });
  }, []);

  return (
    <div className="background">
      <div className="table-container">
        <h1>Pokémon List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemonList.map((pokemon, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pokemon.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
