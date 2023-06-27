import React, { useReducer } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ToDoList from './ToDoList';
import { TODO_TASK_SCHEMA } from 'utils/validationSchemas';
import todoReducer from './reducer';
import ToDoCreator from './ToDoCreator';

function ToDo() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAddTodo = (values, { resetForm }) => {
    const { todo } = values;
    resetForm();

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };


  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoCreator handleAddTodo={handleAddTodo} />
      <ToDoList
        dispatch={dispatch}
        todos={todos}
      />
    </div>
  );
}

export default ToDo;
