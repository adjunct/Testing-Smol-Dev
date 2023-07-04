import React from 'react';
import { Todo } from '../types/todo';
import '../styles/TodoItem.css';
import ThreeDotMenu from './ThreeDotMenu';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (selectedTodo: Todo) => void;
  deleteTodo: (selectedTodo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo);
  };

  return (
    <div className={`todo-item ${todo.complete ? 'complete' : ''}`}>
      <input id="todo-checkbox" type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
      <label htmlFor="todo-checkbox">{todo.text}</label>
      <ThreeDotMenu id="todo-menu" handleDeleteClick={handleDeleteClick} />
    </div>
  );
};

export default TodoItem;