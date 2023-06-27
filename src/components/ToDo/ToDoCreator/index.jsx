import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { TODO_TASK_SCHEMA } from 'utils/validationSchemas';

function ToDoCreator({ handleAddTodo }) {
  return (
    <Formik
      initialValues={{ todo: '' }}
      validationSchema={TODO_TASK_SCHEMA}
      onSubmit={handleAddTodo}
    >
      <Form>
        <Field type='text' name='todo' placeholder='Add Todo' />
        <ErrorMessage name='todo' component='div' />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  );
}

export default ToDoCreator;
