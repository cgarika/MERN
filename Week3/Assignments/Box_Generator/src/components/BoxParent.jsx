import React, { useState } from "react";
import BoxForm from "./BoxForm";
import BoxDisplay from "./BoxDisplay";

const BoxParent = () => {
  const [boxes, setBoxes] = useState([]); // Array to hold all box objects

  // Function to add a new box with its color, size, and unique id
  const addBox = (color, size, id) => {
    setBoxes([...boxes, { id, color, size }]);
  };

  // Function to delete a specific box by its unique id (UUID)
  const deleteBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id)); // Filter out the selected box
  };

  return (
    <div>
      {/* Pass the addBox function to BoxForm to add a new box */}
      <BoxForm addBox={addBox} />
      {/* Pass the boxes array and delete function to BoxDisplay */}
      <BoxDisplay boxes={boxes} deleteBox={deleteBox} />
    </div>
  );
};

export default BoxParent;
