import styles from './TodoItem.module.css';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from './todosSlice';

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  return (
    <li className={styles['todo-item']}>
      <p className={styles['todo-item__title']}>{todo.title}</p>
      <p className={styles['todo-item__createdDate']}>Created At:{todo.createdDate}</p>
      <p className={styles['todo-item__editedDate']}>Edited At:{todo.editedDate}</p>
      <p className={styles['todo-item__completed']}>
        Completed:
        <input
          className={styles['todo-item__checkbox']}
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => dispatch(completeTodo(todo.id))}
        />
      </p>
      <div className={styles['todo-item__options']}>
        <button className={styles['todo-item__edit-btn']}>
          Edit Todo <CiEdit />
        </button>
        <button
          className={styles['todo-item__delete-btn']}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete Todo <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
