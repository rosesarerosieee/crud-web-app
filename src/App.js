import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import AppRouter from "./routers";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter /> 
    </Router>
  );
}

export default App;
