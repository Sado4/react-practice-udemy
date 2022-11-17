import { useState } from 'react';

const Form = ({ todos, addedTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    console.log(todos);

    const newTodo = {
      id: todos.length + 1,
      content: enteredTodo,
    };

    console.log(newTodo);

    addedTodo(newTodo);

    setEnteredTodo('');
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          addTodo(e);
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
