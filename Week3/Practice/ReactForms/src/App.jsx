import React from "react";
import PetsCard from "./components/PetsCard";
import "./App.css";

const App = () => {
  const petInfo = [
    {
      name: "lucy",
      age: 10,
      breed: "shepard",
      weight: 40,
    },
    {
      name: "landon",
      age: 15,
      breed: "retriever",
      weight: 60,
    },
  ];

  return (
    <>
      {petInfo.map((pets, index) => (
        <PetsCard
          Key={index}
          name={pets.name}
          age={pets.age}
          breed={pets.breed}
          weight={pets.weight}
        />
      ))}
    </>
  );
};
export default App;
