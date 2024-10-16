import React from "react";

const BoxDisplay = ({ boxes, deleteBox }) => {
  return (
    <div>
      <h2>Boxes</h2>
      <div className="box-container">
        {boxes.map((box) => (
          <div key={box.id} style={{ marginBottom: "20px" }}>
            <div
              style={{
                backgroundColor: box.color,
                width: `${box.size}px`,
                height: `${box.size}px`,
                border: "1px solid black",
              }}
            ></div>
            <button onClick={() => deleteBox(box.id)}>Delete Box</button>{" "}
            {/* Delete Button */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxDisplay;
