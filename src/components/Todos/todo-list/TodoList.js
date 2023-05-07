import { useSelector, useDispatch } from "react-redux";
import { setFilter, filteredTodosSelector } from "../../../stores/todosSlice";
import TodoItem from "../todo-item/TodoItem";
import TodoFooter from "../todo-footer/TodoFooter";
import Card from "../../UI/Card/Card";

const TodoList = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(filteredTodosSelector);

  const onFilterHandler = (filterProperty) => {
    dispatch(setFilter(filterProperty));
  };

  return (
    <Card>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            isDone={todo.isDone}
            description={todo.description}
          />
        ))}
      </ul>
      <TodoFooter
        countTodos={filteredTodos.length}
        onFilterHandler={onFilterHandler}
      />
    </Card>
  );
};

export default TodoList;
