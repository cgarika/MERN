import React from "react";
import PersonCard from "./components/PersonCard";
import "./App.css";

const App = () => {
  const personDetails = [
    {
      firstName: "Doe",
      lastName: "Jane",
      age: 45,
      hairColor: "Black",
    },
    {
      firstName: "Smith",
      lastName: "John",
      age: 88,
      hairColor: "Brown",
    },
    {
      firstName: "Fillmore",
      lastName: "Millard",
      age: 50,
      hairColor: "Brown",
    },
    {
      firstName: "Smith",
      lastName: "Maria",
      age: 62,
      hairColor: "Brown",
    },
  ];

  return (
    <>
      {personDetails.map((person, index) => (
        <PersonCard
          key={index}
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor}
        />
      ))}
    </>
  );
};

export default App;
