import { useState } from 'react';

import List from './List';
import Form from './Form';

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: '店予約する',
    },
    {
      id: 2,
      content: '卵買う',
    },
    {
      id: 3,
      content: '郵便出す',
    },
  ];

  const [todos, settodos] = useState(todoList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    settodos(newTodos);
  };

  const addedTodo = (content) => {
    // const newTodos = [...todos, { id: todos.length + 1, content: content }];

    settodos([...todos, content]);
  };

  return (
    <div>
      <h2>Remainder</h2>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form todos={todos} addedTodo={addedTodo} />
    </div>
  );
};

export default Todo;
