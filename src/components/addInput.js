import React, { useState, useEffect } from "react";
import "../stylesheets/addInput.css";
import { GrAdd } from "react-icons/gr";
const AddInput = (props) => {
  const { addInput, placeholder } = props;
  const [inputName, setInputName] = useState("");

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (inputName !== "") {
      addInput(inputName);
      setInputName("");
    }
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="addInputTitle">
          <input
            type="text"
            className="field"
            placeholder={placeholder}
            name="name"
            onChange={handleInputChange}
            value={inputName}
          />
          <div></div>
          <button className="addButton" type="submit">
            <GrAdd />
          </button>
        </div>
      </form>
    </>
  );
};

export default AddInput;
