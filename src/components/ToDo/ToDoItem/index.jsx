import React from 'react';

function ToDoItem({ todo, dispatch }) {

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <li>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => handleToggleTodo(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
