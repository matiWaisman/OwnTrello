import React from "react";
import "../stylesheets/listsContainer.css";
import List from "./list";

const listsContainer = () => {
  return (
    <div className="base">
      <div className="lists">
        <List />
      </div>
    </div>
  );
};

export default listsContainer;
