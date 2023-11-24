import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import todoTitleReducer from '../features/todos/todoTitleSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    todoTitle: todoTitleReducer,
  },
});
