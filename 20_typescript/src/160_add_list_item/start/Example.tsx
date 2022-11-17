import { useState } from 'react';
import TaskList from './TaskList';

export type Todo = {
  id: number;
  text: string;
};

const Example: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<Todo[]>([
    { id: 1, text: 'Todo1' },
    { id: 2, text: 'Todo2' },
  ]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addItemClickHandle = () => {
    setTasks((state) => [...state, { id: state.length + 1, text: inputText }]);
    setInputText('');
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={changeHandler} />
      <button onClick={addItemClickHandle}>Add</button>

      <TaskList tasks={tasks} />
    </div>
  );
};

export default Example;
