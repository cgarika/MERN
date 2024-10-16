import React from "react";
import { useParams } from "react-router-dom";

const NumberOrWord = () => {
  const { input } = useParams();
  return isNaN(input) ? <h1>{input}</h1> : <h1>The number is {input}</h1>;
};

export default NumberOrWord;
