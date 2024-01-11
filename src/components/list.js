import React, { useState, useEffect } from "react";
import "../stylesheets/list.css";
import Task from "./task";
import Edit from "./edit";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import AddInput from "./addInput";

const List = (props) => {
  const {
    listName,
    listIterator,
    deleteList,
    editList,
    listIteratorToDeleteTask,
    setListIteratorToDeleteTask,
    taskIteratorToDelete,
    setTaskIteratorToDelete,
  } = props;
  const [isInEdit, setIsInEdit] = useState(false);
  const [tasksArray, setTasksArray] = useState([]);

  const addTask = (taskName) => {
    setTasksArray([...tasksArray, taskName]);
  };

  const handleDeleteClick = () => {
    deleteList(listIterator);
  };

  const handleEditListClick = (newName) => {
    if (isInEdit === true) {
      if (newName !== "") {
        editList(listIterator, newName);
      }
    }
    setIsInEdit(!isInEdit);
  };

  const deleteTask = (taskPosition) => {
    var copyOfTasks = tasksArray;
    copyOfTasks.splice(taskPosition, 1);
    setTasksArray([...copyOfTasks]);
  };

  const editTask = (taskPosition, newName) => {
    var copyOfTasks = tasksArray;
    copyOfTasks[taskPosition] = newName;
    setTasksArray([...copyOfTasks]);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragDrop = (e) => {
    let transferedTodoName = e.dataTransfer.getData("taskName");
    let transferedTodoId = e.dataTransfer.getData("taskId");
    let transferedListId = e.dataTransfer.getData("listId");
    addTask(transferedTodoName);
    setListIteratorToDeleteTask(...transferedListId);
    setTaskIteratorToDelete(...transferedTodoId);
  };

  useEffect(() => {
    if (listIteratorToDeleteTask == listIterator) {
      deleteTask(taskIteratorToDelete);
      setListIteratorToDeleteTask(-1);
      setTaskIteratorToDelete(-1);
    }
  }, [listIteratorToDeleteTask]);

  return (
    <div
      className="list"
      droppable
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => dragDrop(e)}
    >
      {isInEdit ? (
        <Edit
          handleEditClick={handleEditListClick}
          placeholder={listName}
          isInEditTask={false}
        />
      ) : (
        <div className="listTitle">
          <div className="listName">{listName}</div>
          <div className="subGrid">
            <button className="button" onClick={handleEditListClick}>
              <MdModeEditOutline />
            </button>
            <button className="button" onClick={handleDeleteClick}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      )}

      {tasksArray.map((taskName, tasksIterator) => (
        <Task
          taskName={taskName}
          tasksIterator={tasksIterator}
          deleteTask={deleteTask}
          editTask={editTask}
          listName={listName}
          listIterator={listIterator}
        />
      ))}
      <AddInput addInput={addTask} placeholder="Add a new task" />
    </div>
  );
};

export default List;
