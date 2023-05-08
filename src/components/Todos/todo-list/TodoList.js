import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  setFilter,
  filteredTodosSelector,
  reorderTodos,
} from "../../../stores/todosSlice";
import TodoItem from "../todo-item/TodoItem";
import TodoFooter from "../todo-footer/TodoFooter";
import Card from "../../UI/Card/Card";

const TodoList = () => {
  const filteredTodos = useSelector(filteredTodosSelector);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const dispatch = useDispatch();

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

  const onDragStartHandle = (event, index) => {
    setDraggedIndex(index);
    event.dataTransfer.setData("text/plain", index);
  };

  const onDragOverHandle = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDropHandle = (event, index) => {
    event.preventDefault();
    dispatch(
      reorderTodos({
        draggedIndex: draggedIndex,
        droppedIndex: index,
      })
    );
  };

  const onDragEndHandle = () => {
    setDraggedIndex(null);
  };

  return (
    <Card>
      <ul>
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            index={index}
            isDone={todo.isDone}
            description={todo.description}
            onDragStartHandle={onDragStartHandle}
            onDragOverHandle={onDragOverHandle}
            onDropHandle={onDropHandle}
            onDragEndHandle={onDragEndHandle}
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
