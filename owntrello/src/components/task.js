import React from "react";
import "../stylesheets/task.css";

const Task = (props) => {
  const { taskName, iterator } = props;
  return (
    <>
      <div className="task">{taskName}</div>
    </>
  );
};

export default Task;
