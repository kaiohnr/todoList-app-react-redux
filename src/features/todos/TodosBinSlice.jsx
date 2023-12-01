import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todosBinSlice = createSlice({
  name: 'todosBin',
  initialState,
  reducers: {
    addDeletedTodo: (state, action) => {
      return (state = [...state, action.payload]);
    },
    deleteTodoPermanently: (state, action) => {
      return (state = state.filter((todo) => todo.id !== action.payload));
    },
  },
});

export const { addDeletedTodo, deleteTodoPermanently } = todosBinSlice.actions;
export default todosBinSlice.reducer;
