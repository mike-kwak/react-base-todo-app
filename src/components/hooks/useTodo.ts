import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import {
  addTodo,
  cancelTodo,
  doneTodo,
  removeTodo,
  resetTodo,
  todoSelector,
} from '../../store/todo';
import { v4 as uuid4 } from 'uuid';

const useTodo = () => {
  const todo = useSelector(todoSelector);
  const dispatch = useDispatch<AppDispatch>();

  const add = (label: string) => dispatch(addTodo({ id: uuid4(), label, isDone: false }));

  const remove = (todoId: string) => dispatch(removeTodo(todoId));

  const done = (todoId: string) => dispatch(doneTodo(todoId));

  const cancel = (todoId: string) => dispatch(cancelTodo(todoId));

  const reset = () => dispatch(resetTodo());

  return {
    todo,
    add,
    remove,
    done,
    cancel,
    reset,
  };
};

export default useTodo;
