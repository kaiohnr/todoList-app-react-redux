import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    showAllTodos: (state, action) => {
      state.filter = 'all';
    },
    showCompletedTodos: (state, action) => {
      state.filter = 'completed';
    },
    showUncompletedTodos: (state, action) => {
      state.filter = 'uncompleted';
    },
  },
});

export const { showAllTodos, showCompletedTodos, showUncompletedTodos } =
  filterSlice.actions;

export default filterSlice.reducer;
