import React from "react";

import "./App.css";
import { SearchBar } from "./Component/SearchBar/SearchBar";
import { WorkZone } from "./Component/WorkZone";

function App() {
  return (
    <div className="App">
      <h1>Github Repo Search</h1>
      <SearchBar />
      <WorkZone />
    </div>
  );
}

export default App;
