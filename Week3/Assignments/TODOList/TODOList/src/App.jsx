import React, { useState } from "react";
import List from "./components/List";
import DisplayList from "./components/DisplayList";
import "./App.css";

// The main App component
const App = () => {
  // useState hook to manage the task list state
  // taskList stores the list of tasks, setTaskList is the function to update it
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      {/* Pass the task list and the function to update it as props to the List component */}
      <List taskList={taskList} setTaskList={setTaskList} />

      {/* Pass the task list and the function to update it as props to the DisplayList component */}
      <DisplayList taskList={taskList} setTaskList={setTaskList} />
    </>
  );
};

// Export the App component as the default export
export default App;
