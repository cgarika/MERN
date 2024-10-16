import React from "react";
import App from "../App";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;

  return (
    <>
      <div className="memberDetails">
        <p className="memberName">
          {firstName}, {lastName}
        </p>
        <p>
          <label htmlFor="Age">Age: </label>
          {age}
        </p>
        <p>
          <label htmlFor="HairColor">Hair Color: </label>
          {hairColor}
        </p>
      </div>
    </>
  );
};
export default PersonCard;
