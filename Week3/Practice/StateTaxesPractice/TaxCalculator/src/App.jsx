import React from "react";
import CalculationCard from "./components/Calculation";
import "./App.css";

const App = () => {
  const stateList = [
    {
      state: "California",
      salesTax: 0.0725,
    },
    {
      state: "New York",
      salesTax: 0.04,
    },
    {
      state: "Texas",
      salesTax: 0.0625,
    },
  ];

  return (
    <>
      {stateList.map((stateTaxMap, index) => (
        <CalculationCard
          key={index}
          state={stateTaxMap.state}
          tax={stateTaxMap.salesTax}
        />
      ))}
    </>
  );
};
export default App;
