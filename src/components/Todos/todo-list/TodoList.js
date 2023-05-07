import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  setFilter,
  filteredTodosSelector,
} from "../../../stores/todosSlice";
import TodoItem from "../todo-item/TodoItem";
import TodoFooter from "../todo-footer/TodoFooter";
import Card from "../../UI/Card/Card";

const TodoList = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(filteredTodosSelector);

  const onFilterHandler = (filterProperty) => {
    dispatch(setFilter(filterProperty));
  };

  const onDeleteCompletedTodosHandler = () => {
    const completedTodoIds = filteredTodos
      .filter((todo) => todo.isDone)
      .map((todo) => todo.id);

    completedTodoIds.forEach((id) => {
      dispatch(
        deleteTodo({
          id: id,
        })
      );
    });
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
        onDeleteCompletedTodosHandler={onDeleteCompletedTodosHandler}
      />
    </Card>
  );
};

export default TodoList;
