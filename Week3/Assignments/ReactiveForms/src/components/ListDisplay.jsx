import React from "react";

// The ListDisplay component receives a 'list' prop, which is an array of items to display
const ListDisplay = ({ list }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {/* Iterate over the list array and create a <li> element for each item */}
        {list.map((item, index) => (
          // The 'key' prop helps React identify which items have changed, are added, or are removed
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListDisplay;
