import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import styles from './addTodoForm.module.css';
import { addTodo } from './todosSlice';
import { useDispatch } from 'react-redux';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');

  const changeTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  const canCreateTodo = todoTitle === '';

  const createNewTodo = () => {
    dispatch(addTodo(todoTitle));
    setTodoTitle('');
  };

  return (
    <div className={styles['container']}>
      <h1>Good Morning, Unknown User. What about write a new todo?</h1>
      <div className={styles['form-container']}>
        <input
          value={todoTitle}
          onChange={changeTodoTitle}
          className={styles['form-container__input']}
          type="text"
          placeholder="Write a todo"
        />
        <button
          disabled={canCreateTodo}
          className={styles['form-container__button']}
          onClick={() => createNewTodo()}
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
