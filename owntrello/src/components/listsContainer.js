import React from "react";
import "../stylesheets/listsContainer.css";
import List from "./list";
import AddList from "./addList";

const listsContainer = () => {
  return (
    <div className="base">
      <div className="lists">
        <List />
        <AddList />
      </div>
    </div>
  );
};

export default listsContainer;
