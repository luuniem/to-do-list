import React from "react";
const Task = props => {
  const { id, message, deleteTask } = props;
  return (
    <div className="card horizontal">
      <div className="card-content">
        <label htmlFor={id}>
          <input id={id} type="checkbox" onClick={deleteTask} />
          <span>{message}</span>
        </label>
      </div>
    </div>
  );
};

export default Task;
