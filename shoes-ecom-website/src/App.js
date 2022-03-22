import "./App.css";
import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
