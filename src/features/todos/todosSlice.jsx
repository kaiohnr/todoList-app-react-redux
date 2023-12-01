import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { current } from '@reduxjs/toolkit';
import moment from 'moment/moment';

const initialState = [];

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
        editedTime: '',
        title: action.payload.title,
        completed: false,
        isEditing: false,
      };

      return (state = [newTodo, ...state]);
    },
    addTodoFromRestore: {
      reducer(state, action) {
        return (state = [action.payload, ...state]);
      },
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
    setTodoAsEditing: {
      reducer(state, action) {
        const editingTodo = state.find((todo) => todo.id === action.payload);
        editingTodo.isEditing = true;
      },
    },
    editTodoTitle: {
      reducer(state, action) {
        const { newTitle, editingTodoId } = action.payload;
        const todoItem = state.find((todo) => todo.id === editingTodoId);
        const getEditedDate = new Date();
        todoItem.editedDate = moment(getEditedDate).format('DD/MM/YYYY');
        todoItem.editedTime = moment(getEditedDate).format('HH:mm');
        todoItem.title = newTitle;
        todoItem.isEditing = false;
      },
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  completeTodo,
  setTodoAsEditing,
  editTodoTitle,
  addTodoFromRestore,
} = todosSlice.actions;
export default todosSlice.reducer;
