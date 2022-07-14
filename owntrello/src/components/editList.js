import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import "../stylesheets/editTask.css";

const EditList = (props) => {
  const { handleEditListClick, placeholder } = props;

  const [newName, setNewName] = useState("");

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const submitForm = () => {
    handleEditListClick(newName);
    setNewName("");
  };
  return (
    <form onSubmit={submitForm}>
      <div className="editContainer">
        <input
          className="editField"
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
  );
};

export default EditList;
