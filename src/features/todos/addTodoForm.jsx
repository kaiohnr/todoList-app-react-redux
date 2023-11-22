import { FaCheck } from 'react-icons/fa';
import styles from './addTodoForm.module.css';

const AddTodoForm = () => {
  return (
    <div className={styles['container']}>
      <h1>Good Morning, Unknown User. What about write a new todo?</h1>
      <div className={styles['form-container']}>
        <input
          className={styles['form-container__input']}
          type="text"
          placeholder="Write a todo"
        />
        <button className={styles['form-container__button']}>
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
