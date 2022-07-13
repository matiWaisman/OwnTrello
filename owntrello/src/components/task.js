import React from "react";
import "../stylesheets/task.css";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

const Task = (props) => {
  const { taskName, iterator, deleteTask } = props;

  const handleDeleteClick = () => {
    deleteTask(iterator);
  };

  return (
    <>
      <div className="task">
        <div className="taskName">{taskName}</div>
        <div className="subGrid">
          <button className="button">
            <MdModeEditOutline />
          </button>
          <button className="button">
            <FaTrashAlt onClick={handleDeleteClick} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
