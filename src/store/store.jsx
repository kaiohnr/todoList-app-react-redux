import { configureStore } from '@reduxjs/toolkit';

import todosReducer from '../features/todos/todosSlice';
import todoTitleReducer from '../features/todos/todoTitleSlice';
import filterTodoReducer from '../features/todos/FilterTodoSlice';
import TodosBinReducer from '../features/todos/TodosBinSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    todoTitle: todoTitleReducer,
    filter: filterTodoReducer,
    todosBin: TodosBinReducer,
  },
});
