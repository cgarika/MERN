import React from "react";

const UserListDisplay = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListDisplay;
