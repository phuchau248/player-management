import React from "react";

const Task = ({ task, markDoneTask, deleteTask }) => {
  // Return
  return (
    <div className="m-2 border bg-light">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={() => markDoneTask(task.id)}
        checked={task.done}
      />
      <label className="label">{task.name}</label>
      <button
        className="btn-danger"
        style={{ float: "right" }}
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
