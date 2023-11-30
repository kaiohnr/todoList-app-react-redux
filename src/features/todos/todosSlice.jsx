import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { current } from '@reduxjs/toolkit';
import moment from 'moment/moment';

const initialState = [
  {
    id: '1',
    createdDate: '28/11/2023',
    createdTime: '14:04',
    editedDate: '',
    editedTime: '',
    title: 'Comprar leite',
    completed: false,
    isEditing: false,
  },
  {
    id: '2',
    createdDate: '28/11/2023',
    createdTime: '12:04',
    editedDate: '',
    editedTime: '',
    title: 'Comprar feijao',
    completed: false,
    isEditing: false,
  },
  {
    id: '3',
    createdDate: '25/11/2023',
    createdTime: '08:00',
    editedDate: '',
    editedTime: '',
    title: 'Correr às nove horas',
    completed: true,
    isEditing: false,
  },
  {
    id: '4',
    createdDate: '29/11/2023',
    createdTime: '05:00',
    editedDate: '',
    editedTime: '',
    title: 'Correr às seis horas',
    completed: true,
    isEditing: false,
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
        editedTime: '',
        title: action.payload.title,
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

export const { addTodo, deleteTodo, completeTodo, setTodoAsEditing, editTodoTitle } =
  todosSlice.actions;
export default todosSlice.reducer;
