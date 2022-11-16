import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
}

type User = {
  name: string;
  age: number;
}

const Example = () => {
  // stateの型定義
  const [text, setText] = useState("Hello");
  // useState(0);

  const [user, setUser] = useState<User[]>([{ name: "Taro", age: 20 }]);
  
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, text: "todo1", done: false }]);
  console.log('todos: ', todos);

};

export default Example;
