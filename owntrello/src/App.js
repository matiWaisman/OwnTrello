import React, { useState, useEffect } from "react";
import "./App.css";
import PageFooter from "./components/pageFooter";
import ListsContainer from "./components/listsContainer";

function App() {
  return (
    <div className="App">
      <ListsContainer />
      <PageFooter />
    </div>
  );
}

export default App;
