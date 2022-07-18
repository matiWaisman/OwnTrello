import React, { useState } from "react";
import "../stylesheets/task.css";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import Edit from "./edit";

const Task = (props) => {
  const { taskName, tasksIterator, deleteTask, editTask, listIterator } = props;
  const [isInEdit, setIsInEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteTask(tasksIterator);
  };

  const handleEditClick = (newName) => {
    if (isInEdit === true) {
      if (newName !== "") {
        editTask(tasksIterator, newName);
      }
    }
    setIsInEdit(!isInEdit);
  };

  const dragStarted = (e, name, taskId, listId) => {
    e.dataTransfer.setData("taskName", name);
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("listId", listId);
  };

  return (
    <>
      {isInEdit ? (
        <Edit
          handleEditClick={handleEditClick}
          placeholder={taskName}
          isEditTask={true}
        />
      ) : (
        <div
          className="task"
          draggable
          onDragStart={(e) =>
            dragStarted(e, taskName, tasksIterator, listIterator)
          }
        >
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
