import React, { useState } from "react";

const CalculationCard = (props) => {
  const { state, tax } = props;

  const [itemPrice, setItemPrice] = useState(0);

  const findPrice = (item) => {
    let taxAddedAmount = item * tax;
    setItemPrice(Number(item) + taxAddedAmount);
  };

  return (
    <div className="container">
      <div className="txbox">
        <input
          name="itemPrice"
          type="number"
          onChange={(e) => findPrice(e.target.value)}
        />

        <p>
          {state} Price: ${itemPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
export default CalculationCard;
