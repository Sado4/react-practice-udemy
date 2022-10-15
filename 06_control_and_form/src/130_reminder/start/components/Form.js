import { useState } from 'react';

const Form = ({ todos, addedTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState('');

  const addTodo = (todos, e) => {
    e.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      content: enteredTodo,
    };

    addedTodo(newTodo);

    setEnteredTodo('');
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          addTodo(todos, e);
        }}
      >
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => {
            setEnteredTodo(e.target.value);
          }}
        />
        <button>追加</button>
      </form>
    </>
  );
};

export default Form;
