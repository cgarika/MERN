import React from "react";
import "../CSS/Child.css"; // Assuming you have styles here for ValFunction

const ValFunction = () => {
  const num = 123;
  const string = "My Name is Chanakya";
  const objectVar = {
    vegetable: "beets",
    color: "red",
  };
  const Arr = ["index0", "index1"];

  const { vegetable, color } = objectVar;
  const [firstVal, secondVal] = Arr;

  return (
    <>
      <p>{num}</p>
      <p>{string}</p>
      <p>{vegetable}</p>
      <p>{color}</p>
      <p>{firstVal}</p>
      <p>{secondVal}</p>
      <div className="header">Chanakya</div>
    </>
  );
};

export default ValFunction;
