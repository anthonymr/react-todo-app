import TodoItem from "./TodoItem";

function TodosList({ todos, setTodos, delTodo, setUpdate }) {
    return (
    <ul>
      { todos.map((todo) => (
        <TodoItem itemProp={todo} setTodos={setTodos} delTodo={delTodo} setUpdate={setUpdate} key={todo.id} />
      ))}
    </ul>
    );
  }
  
  export default TodosList;
  