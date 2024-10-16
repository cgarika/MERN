import React, { useState } from "react";

const DetailsComponent = (props) => {
  const { firstName, lastName, age: initialAge, hairColor } = props;
  const [age, setAge] = useState(initialAge);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const resetValues = () => {
    setAge(initialAge);
  };

  return (
    <div className="container">
      <div className="personCard">
        <div className="header">
          {lastName}, {firstName}
        </div>
        <p>
          <span className="Labels">Age:</span> {age}
        </p>
        <p>
          <span className="Labels">Hair Color:</span> {hairColor}
        </p>
        <p>
          <button className="increment" onClick={incrementAge}>
            Birthday Button for {firstName} {lastName}
          </button>
          <button className="resetValues" onClick={resetValues}>
            Reset
          </button>
        </p>
      </div>
    </div>
  );
};

export default DetailsComponent;
