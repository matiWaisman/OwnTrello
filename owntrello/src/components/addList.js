import React from "react";
import "../stylesheets/addList.css";
import { GrAdd } from "react-icons/gr";
const addList = () => {
  return (
    <div className="addListContainer">
      <div className="addListTitle">
        <div>Add new list</div>
        <div></div>
        <button className="addButton">
          <GrAdd />
        </button>
      </div>
    </div>
  );
};

export default addList;
