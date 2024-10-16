import React from "react";
import DetailsComponent from "./components/DetailsComponent";
import "./App.css";

const App = () => {
  const memberDetails = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black",
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown",
    },
  ];

  return (
    <>
      {memberDetails.map((person, index) => (
        <DetailsComponent
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
