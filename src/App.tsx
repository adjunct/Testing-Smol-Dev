import React, { useState } from 'react';
import './styles/App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { Todo } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo: DeleteTodo = selectedTodo => {
    const newTodos = todos.filter(todo => todo !== selectedTodo);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;