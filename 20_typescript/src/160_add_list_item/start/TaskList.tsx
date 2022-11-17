import { Todo } from './Example';

type TaskListProps = {
  tasks: Todo[];
};

// ジェネリクスでPropsの型を指定する

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
};

export default TaskList;
