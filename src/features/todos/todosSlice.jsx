import { createSlice, nanoid } from '@reduxjs/toolkit';

const initalState = [
  {
    id: '1',
    todo: 'Do something nice for someone I care about',
    completed: true,
    userId: 26,
  },
  {
    id: '2',
    todo: 'Watch a new movie',
    completed: false,
    userId: 27,
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initalState,
  reducers: {
    addedTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const selectAllTodos = (state) => state.todos;
export const { addedTodo } = todosSlice.actions;
export default todosSlice.reducer;
