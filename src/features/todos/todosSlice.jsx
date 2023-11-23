import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { current } from '@reduxjs/toolkit';
import moment from 'moment/moment';

const initialState = [
  {
    id: nanoid(),
    title: 'Do something nice for someone I care about',
    completed: true,
    createdDate: '22/11/2023 at 12:30',
    editedDate: '22/11/2023 at 12:33',
  },
  {
    id: nanoid(),
    title: 'Watch a new movie',
    completed: false,
    createdDate: '22/11/2023 at 12:30',
    editedDate: '22/11/2023 at 12:33',
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const getCurrentDate = new Date();
      const generateId = nanoid();

      const newTodo = {
        id: generateId,
        createdDate: moment(getCurrentDate).format('DD/MM/YYYY'),
        createdTime: moment(getCurrentDate).format('HH:mm'),
        editedDate: '',
        title: action.payload,
        completed: false,
        isEditing: false,
      };

      return (state = [newTodo, ...state]);
    },
    deleteTodo: {
      reducer(state, action) {
        return (state = state.filter((todo) => todo.id !== action.payload));
      },
    },
    completeTodo: {
      reducer(state, action) {
        const getTodo = state.find((todo) => todo.id === action.payload);
        getTodo.completed = !getTodo.completed;
      },
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;
