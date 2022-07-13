import React, { useState } from "react";
import "../stylesheets/list.css";
import Task from "./task";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import AddInput from "./addInput";

const List = (props) => {
  const { listName, iterator, deleteList, editList } = props;
  const [isInEdit, setIsInEdit] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const addTask = (taskName) => {
    setTasksArray([...tasksArray, taskName]);
  };

  const handleInputChange = (e) => {
    setNewListName(e.target.value);
  };

  const handleDeleteClick = () => {
    deleteList(listName);
  };

  const editClick = (e) => {
    e.preventDefault();
    if (isInEdit) {
      handleEditSubmit();
    }
    setIsInEdit(!isInEdit);
  };

  const handleEditSubmit = () => {
    if (newListName !== "") {
      editList(iterator, newListName);
      setNewListName("");
    }
  };

  return (
    <div className="list">
      <div className="listTitle">
        {isInEdit ? (
          <div className="addListTitle">
            <form onSubmit={editClick}>
              <input
                type="text"
                className="field"
                placeholder={listName}
                name="name"
                onChange={handleInputChange}
                value={newListName}
              />
            </form>
          </div>
        ) : (
          <div>{listName}</div>
        )}
        <div></div>
        <div className="subGrid">
          <button className="button" onClick={editClick}>
            <MdModeEditOutline />
          </button>
          <button className="button" onClick={handleDeleteClick}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
      {tasksArray.map((taskName, iterator) => (
        <Task taskName={taskName} iterator={iterator} />
      ))}
      <AddInput addInput={addTask} placeholder="Add a new task" />
    </div>
  );
};

export default List;
