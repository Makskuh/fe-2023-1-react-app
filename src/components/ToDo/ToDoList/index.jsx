import React from 'react';
import ToDoItem from '../ToDoItem';

function ToDoList({ dispatch, todos }) {
  const liElement = todos.map((todo) => (
    <ToDoItem key={todo.id} todo={todo} dispatch={dispatch} />
  ));

  return <ul>{liElement}</ul>;
}

export default ToDoList;
