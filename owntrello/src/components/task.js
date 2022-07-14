import React, { useState } from "react";
import "../stylesheets/task.css";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import EditTask from "./editTask";

const Task = (props) => {
  const { taskName, iterator, deleteTask, editTask } = props;
  const [isInEdit, setIsInEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteTask(iterator);
  };

  const handleEditClick = (newName) => {
    if (isInEdit === true) {
      if (newName !== "") {
        editTask(iterator, newName);
      }
    }
    setIsInEdit(!isInEdit);
  };

  return (
    <>
      {isInEdit ? (
        <EditTask handleEditClick={handleEditClick} placeholder={taskName} />
      ) : (
        <div className="task">
          <div className="taskName">{taskName}</div>
          <div className="subGrid">
            <button className="button" onClick={handleEditClick}>
              <MdModeEditOutline />
            </button>
            <button className="button">
              <FaTrashAlt onClick={handleDeleteClick} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
