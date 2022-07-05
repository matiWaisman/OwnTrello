import React from "react";
import "../stylesheets/list.css";

const list = () => {
  return (
    <div className="list">
      <div className="listTitle">List title</div>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
      <div className="card">Card 4</div>
      <div className="card">Card 5</div>
      <div className="add-card">+ Add another card</div>
    </div>
  );
};

export default list;
