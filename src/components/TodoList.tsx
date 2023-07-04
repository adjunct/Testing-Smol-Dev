import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/todo';
import '../styles/TodoList.css';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (selectedTodo: Todo) => void;
  deleteTodo: (selectedTodo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;