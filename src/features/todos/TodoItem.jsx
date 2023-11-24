import styles from './TodoItem.module.css';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo, setTodoAsEditing } from './todosSlice';
import { editTitle } from './todoTitleSlice';
import { useSelector } from 'react-redux';

const TodoItem = ({
  id,
  title,
  completed,
  createdDate,
  createdTime,
  editedDate,
  editedTime,
  isEditing,
}) => {
  const dispatch = useDispatch();

  const changeCompleteTodo = () => {
    dispatch(completeTodo(id));
  };

  const handleSetEditTodo = () => {
    dispatch(setTodoAsEditing(id));
    dispatch(editTitle({ name: 'todoTitle', value: title }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={styles['todo-item']}>
      <p className={styles['todo-item__title']}>{title}</p>
      <p className={styles['todo-item__createdDate']}>
        Created At:{createdDate} in {createdTime}
      </p>
      {editedDate ? (
        <p className={styles['todo-item__editedDate']}>
          Edited At:{editedDate} in {editedTime}
        </p>
      ) : (
        ''
      )}
      <p className={styles['todo-item__completed']}>
        Completed:
        <input
          className={styles['todo-item__checkbox']}
          type="checkbox"
          defaultChecked={completed}
          onChange={changeCompleteTodo}
        />
      </p>
      <div className={styles['todo-item__options']}>
        <button
          className={styles['todo-item__edit-btn']}
          onClick={() => handleSetEditTodo()}
        >
          Edit Todo <CiEdit />
        </button>
        <button
          className={styles['todo-item__delete-btn']}
          onClick={() => handleDeleteTodo()}
        >
          Delete Todo <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
