import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// List component handles adding new items to the TODO list
const List = (props) => {
  // useState hook to manage the input field's value
  const [item, setItem] = useState("");

  // Destructure taskList and setTaskList from props
  const { taskList, setTaskList } = props;

  // Function to reset the input field to an empty string
  const reset = () => {
    setItem("");
  };

  // Function to handle the form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new task object with a unique id
    const newList = { item, id: uuidv4() };

    // Update the taskList state by adding the new task
    setTaskList([...taskList, newList]);

    // Reset the input field after submission
    reset();
  };

  return (
    // Form to input a new task and submit it
    <form onSubmit={submitHandler}>
      {/* Header text for the TODO list */}
      <div className="headerText">TODO LIST</div>

      {/* Container for the input field */}
      <div className="container">
        <label htmlFor="item" className="labels">
          Enter Item to Your List
          <input
            type="text"
            name="item"
            id="item"
            className="textboxes"
            value={item}
            onChange={(e) => setItem(e.target.value)} // Update the input value as the user types
          />
        </label>
      </div>

      {/* Buttons for submitting the form and resetting the input field */}
      <div className="buttons">
        <button type="submit" className="submit">
          Add Task
        </button>
        <button type="button" className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  );
};

// Export the List component as the default export
export default List;
