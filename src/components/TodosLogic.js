import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

function TodosLogic() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    setTodos((prevstate) => {
      return [
        ...prevstate,
        {
          id: prevstate[prevstate.length - 1].id + 1,
          title,
          completed: false,
        }
      ];
    });
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList todos={todos} setTodos={setTodos} delTodo={delTodo} />
    </div>
  );
}

export default TodosLogic;
