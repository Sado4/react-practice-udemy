import type { Task } from "./Example";

// TaskListPropsは、TaskListコンポーネントに渡される`props`の型を定義する
type TaskListProps = {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = (props) => {
  return (
    <ul>
      {props.tasks.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  )
}

export default TaskList;
