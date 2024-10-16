import React, { useState } from "react";

const BoxForm = ({ addBox }) => {
  const [colorInput, setColorInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");

  const handleColorChange = (e) => {
    setColorInput(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSizeInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID(); // Generate a unique UUID for the box
    addBox(colorInput, sizeInput, id); // Call addBox to add the new box
    setColorInput(""); // Clear inputs after adding the box
    setSizeInput("");
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <h1>Add a New Box</h1>
        <p>
          <label htmlFor="color">
            Color:
            <input
              type="text"
              name="color"
              id="color"
              value={colorInput}
              onChange={handleColorChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="size">
            Size (pixels):
            <input
              type="number"
              name="size"
              id="size"
              value={sizeInput}
              onChange={handleSizeChange}
            />
          </label>
        </p>
        <button type="submit">Add Box</button>
      </form>
    </div>
  );
};

export default BoxForm;
