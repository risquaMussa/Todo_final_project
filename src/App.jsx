import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import "./App.css";
import Home from "./components/Home";
import React from "react";
import { element } from "prop-types";
import Navigation from "./components/Navigation";

function App() {
  //const [todoList, setTodoList] = React.useState([]);

  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todos"
          element={
            <TodoContainer tableName={import.meta.env.VITE_TABLE_NAME} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
