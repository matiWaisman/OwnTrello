import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import "../stylesheets/editTask.css";

const EditTask = (props) => {
  const { handleEditClick, placeholder } = props;
  const [newName, setNewName] = useState("");

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const submitForm = () => {
    handleEditClick(newName);
    setNewName("");
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="editTaskContainer">
          <input
            className="editTaskField"
            type="text"
            placeholder={placeholder}
            onChange={handleInputChange}
            value={newName}
          ></input>
          <div className="subGrid">
            <button className="button" type="submit">
              <MdModeEditOutline />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditTask;
