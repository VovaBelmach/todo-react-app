import { useSelector } from "react-redux";
import TodoItem from "../todo-item/TodoItem";
import Card from "../../UI/Card/Card";

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <Card>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            isDone={todo.isDone}
            description={todo.description}
          />
        ))}
      </ul>
      <footer>Test</footer>
    </Card>
  );
};

export default TodoList;
