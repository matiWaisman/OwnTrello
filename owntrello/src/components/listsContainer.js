import React, { useState } from "react";
import "../stylesheets/listsContainer.css";
import List from "./list";
import AddList from "./addList";

const ListsContainer = () => {
  const [listsArray, setListsArray] = useState([]);

  const addList = (listName) => {
    setListsArray([...listsArray, listName]);
  };

  return (
    <div className="base">
      <div className="lists">
        {listsArray.map((list) => (
          <List list={list} />
        ))}
        <AddList addList={addList} />
      </div>
    </div>
  );
};

export default ListsContainer;
