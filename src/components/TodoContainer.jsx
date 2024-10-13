import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const TodoContainer = ({ tableName }) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${tableName}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const todos = data.records.map((record) => ({
        title: record.fields.title,
        id: record.id,
      }));

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableName]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const filteredtodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredtodo);
  };

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
    const sortedTodos = [...todoList].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (isAscending) {
        return titleA < titleB ? 1 : titleA > titleB ? -1 : 0;
      } else {
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      }
    });
    setTodoList(sortedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddToDo={addTodo} />
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      )}
      <button onClick={toggleSortOrder}>
        {isAscending ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
        {isAscending ? " Sort Descending" : " Sort Ascending"}
      </button>
    </div>
  );
};

TodoContainer.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default TodoContainer;
