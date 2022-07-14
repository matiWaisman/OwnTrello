import React, { useState } from "react";
import "../stylesheets/listsContainer.css";
import List from "./list";
import AddList from "./addInput";

const ListsContainer = () => {
  const [listsArray, setListsArray] = useState([]);

  const addList = (listName) => {
    setListsArray([...listsArray, listName]);
  };

  const deleteList = (listPosition) => {
    var copyOfLists = listsArray;
    copyOfLists.splice(listPosition, 1);
    setListsArray([...copyOfLists]);
  };

  const editList = (listPosition, newName) => {
    var copyOfLists = listsArray;
    copyOfLists[listPosition] = newName;
    setListsArray([...copyOfLists]);
  };

  return (
    <div className="base">
      <div className="lists">
        {listsArray.map((listName, iterator) => (
          <List
            listName={listName}
            iterator={iterator}
            deleteList={deleteList}
            editList={editList}
          />
        ))}
        <div className="addListContainer">
          <AddList addInput={addList} placeholder="Add a new list" />
        </div>
      </div>
    </div>
  );
};

export default ListsContainer;
