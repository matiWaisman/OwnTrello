import React, { useState } from "react";
import "../stylesheets/list.css";
import Task from "./task";
import EditList from "./editList";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import AddInput from "./addInput";

const List = (props) => {
  const { listName, iterator, deleteList, editList } = props;
  const [isInEdit, setIsInEdit] = useState(false);
  const [tasksArray, setTasksArray] = useState([]);

  const addTask = (taskName) => {
    setTasksArray([...tasksArray, taskName]);
  };

  const handleDeleteClick = () => {
    deleteList(iterator);
  };

  const handleEditListClick = (newName) => {
    if (isInEdit === true) {
      if (newName !== "") {
        editList(iterator, newName);
      }
    }
    setIsInEdit(!isInEdit);
  };

  const deleteTask = (taskPosition) => {
    var copyOfTasks = tasksArray;
    copyOfTasks.splice(taskPosition, 1);
    setTasksArray([...copyOfTasks]);
  };

  const editTask = (taskPosition, newName) => {
    var copyOfTasks = tasksArray;
    copyOfTasks[taskPosition] = newName;
    setTasksArray([...copyOfTasks]);
  };

  return (
    <div className="list">
      <div className="listTitle">
        {isInEdit ? (
          <EditList
            handleEditListClick={handleEditListClick}
            placeholder={listName}
          />
        ) : (
          <>
            <div className="listName">{listName}</div>
            <div className="subGrid">
              <button className="button" onClick={handleEditListClick}>
                <MdModeEditOutline />
              </button>
              <button className="button" onClick={handleDeleteClick}>
                <FaTrashAlt />
              </button>
            </div>
          </>
        )}
      </div>
      {tasksArray.map((taskName, iterator) => (
        <Task
          taskName={taskName}
          iterator={iterator}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
      <AddInput addInput={addTask} placeholder="Add a new task" />
    </div>
  );
};

export default List;
