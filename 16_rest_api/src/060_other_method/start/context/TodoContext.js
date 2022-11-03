import { createContext, useContext, useEffect, useReducer } from 'react';
import todoApi from '../api/todo';

const TODO_API_URL = 'http://localhost:3003/todo';

const TodoContext = createContext();
const TodoDispatchContext = createContext();

// この初期値をapiに変える
// const todosList = [
//   {
//     id: 1,
//     content: '店予約する',
//     editing: false,
//   },
//   {
//     id: 2,
//     content: '卵買う',
//     editing: false,
//   },
//   {
//     id: 3,
//     content: '郵便出す',
//     editing: false,
//   },
// ];

// Reducerはコンポーネントの外に書く
const todoReducer = (todos, action) => {
  switch (action.type) {
    // apiで初期データを取得する
    // 渡ってきたactionのtodosをstateに新しい配列として入れる
    case 'todo/init':
      // console.log(action);
      return [...action.todos];

    case 'todo/add':
      return [...todos, action.todo];

    case 'todo/delete':
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });

    case 'todo/update':
      return todos.map((_todo) => {
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });

    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  // stateの初期値をapiに変える
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    todoApi.getAll().then((todos) => {
      dispatch({ type: 'todo/init', todos });
    });
  }, []);

  return (
    /**
     * stateと更新用関数を分ける理由は、stateを更新する関数を子コンポーネントに渡すときに、
     * stateを更新する関数だけを渡すことができるから(stateは更新されない)。
     */
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);
const useDispatchTodos = () => useContext(TodoDispatchContext);

export { useTodos, useDispatchTodos, TodoProvider };
