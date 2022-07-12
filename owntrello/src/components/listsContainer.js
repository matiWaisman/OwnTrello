import React, { useState } from "react";
import "../stylesheets/listsContainer.css";
import List from "./list";
import AddList from "./addList";

const ListsContainer = () => {
  const [listsArray, setListsArray] = useState([]);

  const addList = (listName) => {
    setListsArray([...listsArray, listName]);
  };

  const deleteList = (listName) => {
    setListsArray(listsArray.filter((list) => list !== listName));
  };

  const editList = (position, newName) => {
    var newArray = listsArray.slice();
    newArray[position] = newName;
    setListsArray(newArray);
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
        <AddList addList={addList} />
      </div>
    </div>
  );
};

export default ListsContainer;
