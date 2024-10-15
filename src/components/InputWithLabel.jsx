import { useEffect, useRef } from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function InputWithLabel(props) {
  //use ref can be used to store dom elements
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className={style.FormGroup}>
      <label htmlFor="todoTitle" className={style.title}>
        {props.children}
      </label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        ref={inputRef}
      />
    </div>
  );
}

InputWithLabel.propTypes = {
  //children: PropTypes.node.isRequired,
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
