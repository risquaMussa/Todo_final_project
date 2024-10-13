import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";

function AddTodoForm({ onAddToDo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    console.log(event);
    event.preventDefault();

    //  Inside handleAddTodo, update the onAddTodo callback prop
    //  to pass an Object instead of a String; Object:
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    onAddToDo(newTodo); //  Pass the newTodo Object to the onAddTodo callback prop
    setTodoTitle("");
  };
  return (
    <>
      <form className="form" onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </>
  );
}
AddTodoForm.propTypes = {
  onAddToDo: PropTypes.func.isRequired,
};

export default AddTodoForm;
