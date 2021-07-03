import React from 'react';
import { TodoAddForm, TodoList } from '../components/todo';

const Todo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem',
        alignItems: 'center',
      }}
    >
      <TodoAddForm />
      <TodoList />
    </div>
  );
};

export default Todo;
