const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  const list = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <button onClick={() => complete(todo.id)}>完了</button>
        <span>{todo.content}</span>
      </div>
    );
  });

  return <>{list}</>;
};

export default List;
