import React from "react";

// The DisplayList component shows the list of tasks
const DisplayList = (props) => {
  // We get taskList and setTaskList from the props (the data passed to this component)
  const { taskList, setTaskList } = props;

  // This function is used to toggle (change) the "completed" status of a task
  const handleTaskCompletion = (id) => {
    // We create a new task list by going through each task
    const updatedTaskList = taskList.map((task) =>
      // If the task's id matches the id passed to the function, we toggle its completed status
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    // We then update the taskList with this new list
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      {/* This is the title of the list */}
      <h2>Task List</h2>

      {/* This is the container that holds all the tasks */}
      <div className="container">
        {/* We go through each task in the taskList and display it */}
        {taskList.map((task) => (
          <div key={task.id} className="task-item">
            {/* This shows the task's name, and if it's completed, it strikes through the text */}
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.item}
            </span>
            {/* This button toggles the task's completion status */}
            <button onClick={() => handleTaskCompletion(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting DisplayList so it can be used in other parts of our app
export default DisplayList;
