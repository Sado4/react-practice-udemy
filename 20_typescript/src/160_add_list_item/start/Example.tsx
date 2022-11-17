import { useState } from 'react';

import TaskList from "./TaskList";

export type Task = {
  id: number;
  text: string;
}

const Example: React.FC = () => {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
  ]);

  const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => setItem(e.target.value);

  const addTaskHandler = () => {
    setTasks((state) => [...tasks, { id: state.length + 1, text: item }]);
    setItem("");
  }

  return (
    <div>
      <input type="text" value={item} onChange={changeTextHandler} />
      <button type='button' onClick={addTaskHandler}>Add</button>

      <TaskList tasks={tasks} />
    </div>
  );
};

export default Example;
