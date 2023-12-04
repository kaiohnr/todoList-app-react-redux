import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { current } from '@reduxjs/toolkit';
import moment from 'moment/moment';

const initialState = [
  {
    id: '1',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'a',
    completed: false,
    isEditing: false,
  },
  {
    id: '2',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'a',
    completed: false,
    isEditing: false,
  },
  {
    id: '3',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'a',
    completed: false,
    isEditing: false,
  },
  {
    id: '4',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'b',
    completed: false,
    isEditing: false,
  },
  {
    id: '5',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'b',
    completed: false,
    isEditing: false,
  },
  {
    id: '6',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'b',
    completed: false,
    isEditing: false,
  },
  {
    id: '7',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'b',
    completed: false,
    isEditing: false,
  },
  {
    id: '8',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'c',
    completed: false,
    isEditing: false,
  },
  {
    id: '9',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'c',
    completed: false,
    isEditing: false,
  },
  {
    id: '10',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'c',
    completed: false,
    isEditing: false,
  },
  {
    id: '11',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'c',
    completed: false,
    isEditing: false,
  },
  {
    id: '12',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'd',
    completed: false,
    isEditing: false,
  },
  {
    id: '13',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'd',
    completed: false,
    isEditing: false,
  },
  {
    id: '14',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'd',
    completed: false,
    isEditing: false,
  },
  {
    id: '15',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'd',
    completed: false,
    isEditing: false,
  },
  {
    id: '16',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'd',
    completed: false,
    isEditing: false,
  },
  {
    id: '17',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'e',
    completed: false,
    isEditing: false,
  },
  {
    id: '18',
    createdDate: '04/12/2023',
    createdTime: '10:42',
    editedDate: '',
    editedTime: '',
    title: 'e',
    completed: false,
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
