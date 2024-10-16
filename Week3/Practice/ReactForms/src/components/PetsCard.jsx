import React, { useState } from "react";

const PetsCard = (props) => {
  const { key, name, age, breed, weight: dogWeight } = props;

  const [weight, setWeight] = useState(dogWeight);

  const weightLoss = () => {
    setWeight(weight - 1);
  };

  const resetValues = () => {
    setWeight(dogWeight);
  };

  return (
    <div className="container">
      <div className="cards">
        <p>
          <label htmlFor="name">Name: </label> {name}
        </p>
        <p>
          <label htmlFor="age">Age: </label> {age}
        </p>
        <p>
          <label htmlFor="breed">Breed: </label> {breed}
        </p>
        <p>
          <label htmlFor="weight">Weight: </label> {weight} lbs
        </p>
        <p>
          <button onClick={weightLoss}>Workout</button>
          <button onClick={resetValues}>Reset</button>
        </p>
      </div>
    </div>
  );
};
export default PetsCard;
``;
