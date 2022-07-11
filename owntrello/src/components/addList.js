import React, { useState, useEffect } from "react";
import "../stylesheets/addList.css";
import { GrAdd } from "react-icons/gr";
const AddList = (props) => {
  const { addList } = props;
  const [listName, setListName] = useState("");

  const handleInputChange = (e) => {
    setListName(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (listName !== "") {
      addList(listName);
      setListName("");
    }
  };

  return (
    <div className="addListContainer">
      <form onSubmit={submitForm}>
        <div className="addListTitle">
          <input
            type="text"
            className="field"
            placeholder="Add a new list"
            name="name"
            onChange={handleInputChange}
            value={listName}
          />
          <div></div>
          <button className="addButton" type="submit">
            <GrAdd />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddList;
