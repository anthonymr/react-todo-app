import TodoItem from "./TodoItem";

function TodosList({ todos, setTodos }) {
    return (
    <ul>
      { todos.map((todo) => (
        <TodoItem itemProp={todo} setTodos={setTodos} key={todo.id} />
      ))}
    </ul>
    );
  }
  
  export default TodosList;
  