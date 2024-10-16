import React from "react";
import SubContent from "./SubContent";
import Advertisement from "./Advertisement";

const MainContent = () => {
  return (
    <div className="main">
      <div>
        <SubContent />
      </div>
      <div>
        <Advertisement />
      </div>
    </div>
  );
};
export default MainContent;
