import React, { useState } from 'react';
import './AddTodoForm.css';

interface AddTodoFormProps {
  addTodo: (newTodo: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodoAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="AddTodoForm" onSubmit={handleNewTodoAdd}>
      <input 
        type="text" 
        id="todo-input" 
        value={newTodo} 
        onChange={handleNewTodoChange} 
        placeholder="Add new task" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;