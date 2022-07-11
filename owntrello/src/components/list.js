import React from "react";
import "../stylesheets/list.css";
import Task from "./task";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const List = (props) => {
  const { list } = props;

  return (
    <div className="list">
      <div className="listTitle">
        <div>{list}</div>
        <div></div>
        <div className="subGrid">
          <button className="button">
            <MdModeEditOutline />
          </button>
          <button className="button">
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
