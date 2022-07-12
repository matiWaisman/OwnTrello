import React, { useState } from "react";
import "../stylesheets/list.css";
import Task from "./task";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const List = (props) => {
  const { listName, iterator, deleteList, editList } = props;
  const [isInEdit, setIsInEdit] = useState(false);
  const [newListName, setNewListName] = useState("");

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
      <Task />
      <div className="addTask">
        <div>Add a new task</div>
        <div></div>
        <button className="addTaskButton">
          <GrAdd />
        </button>
      </div>
    </div>
  );
};

export default List;
