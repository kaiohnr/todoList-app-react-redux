import styles from './addTodoForm.module.css';
import { FaCheck } from 'react-icons/fa';

const AddTodoForm = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Write a todo" />
        <button>
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
