import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoTitle: '',
};

const todoTitleSlice = createSlice({
  name: 'todoTitle',
  initialState,
  reducers: {
    editTitle: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    clearValues: (state, action) => {
      state.todoTitle = '';
    },
  },
});

export const { editTitle, clearValues } = todoTitleSlice.actions;
export default todoTitleSlice.reducer;
