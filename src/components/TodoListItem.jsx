import React from "react";
import style from "./TodoListItem.module.css";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  function clickHandler() {
    onRemoveTodo(todo.id);
  }

  return (
    <>
      <li className={style.ListItem}>
        {todo.title}
        <button className={style.ButtonStyle} onClick={clickHandler}>
          <FaTrashAlt />
        </button>
      </li>
    </>
  );
};
TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
