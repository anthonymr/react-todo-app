import TodoItem from "./TodoItem";

function TodosList({ todos, setTodos, delTodo }) {
    return (
    <ul>
      { todos.map((todo) => (
        <TodoItem itemProp={todo} setTodos={setTodos} delTodo={delTodo} key={todo.id} />
      ))}
    </ul>
    );
  }
  
  export default TodosList;
  