import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import ITodo from '../types/ITodo';

const initialState: ITodo[] = [];

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      return state.filter(todo => todo.id !== action.payload);
    },
    doneTodo(state, action: PayloadAction<string>) {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: true,
          };
        }
        return todo;
      });
    },
    cancelTodo(state, action: PayloadAction<string>) {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: false,
          };
        }
        return todo;
      });
    },
    resetTodo(): ITodo[] {
      return [];
    },
  },
});

export const { addTodo, removeTodo, doneTodo, cancelTodo, resetTodo } = slice.actions;
export const todoSelector = (state: RootState) => state.todo;

export default slice.reducer;
