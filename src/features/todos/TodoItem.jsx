import styles from './TodoItem.module.css';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo, setTodoAsEditing } from './todosSlice';
import { editTitle } from './todoTitleSlice';
import { useSelector } from 'react-redux';
import { addDeletedTodo } from './TodosBinSlice';
import { deleteTodoPermanently } from './TodosBinSlice';
import { addTodoFromRestore } from './todosSlice';
import { showAllTodos } from './FilterTodoSlice';

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
  const allTodos = useSelector((state) => state.todos);
  const deletedTodos = useSelector((state) => state.todosBin);

  const changeCompleteTodo = () => {
    dispatch(completeTodo(id));
  };

  const handleSetEditTodo = () => {
    dispatch(setTodoAsEditing(id));
    dispatch(editTitle({ name: 'todoTitle', value: title }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
    dispatch(
      addDeletedTodo({
        id,
        title,
        completed,
        createdDate,
        createdTime,
        editedDate,
        editedTime,
        isEditing,
      })
    );
  };

  const getDeletedTodo = deletedTodos.find((todo) => todo.id === id);

  const handleRestoreTodo = () => {
    dispatch(
      addTodoFromRestore({
        id,
        title,
        completed,
        createdDate,
        createdTime,
        editedDate,
        editedTime,
        isEditing,
      })
    );
    dispatch(deleteTodoPermanently(id));
    if (deletedTodos.length === 1) {
      dispatch(showAllTodos());
    }
  };

  const handleDeleteTodoPermanently = () => {
    dispatch(deleteTodoPermanently(id));
    if (deletedTodos.length === 1) {
      dispatch(showAllTodos());
    }
  };

  return (
    <li className={styles['todo-item']}>
      <div className={styles['todo-item__title']}>
        <p>{title}</p>
      </div>

      <div className={styles['todo-item__createdDate']}>
        <p>Created At:</p>
        <p>
          {createdDate} in {createdTime}
        </p>
      </div>

      <div className={styles['todo-item__editedDate']}>
        {editedDate && <p>Edited At:</p>}
        {editedDate ? (
          <p>
            {editedDate} in {editedTime}
          </p>
        ) : (
          ''
        )}
      </div>

      <div className={styles['todo-item__completed']}>
        <p>Completed:</p>
        <input
          className={styles['todo-item__checkbox']}
          type="checkbox"
          defaultChecked={completed}
          onChange={changeCompleteTodo}
        />
      </div>

      <div className={styles['todo-item__options']}>
        {getDeletedTodo ? (
          <button
            className={styles['todo-item__edit-btn']}
            onClick={() => handleRestoreTodo()}
          >
            Restore Todo <CiEdit />
          </button>
        ) : (
          <button
            className={styles['todo-item__edit-btn']}
            onClick={() => handleSetEditTodo()}
          >
            Edit Todo <CiEdit />
          </button>
        )}

        {getDeletedTodo ? (
          <button
            className={styles['todo-item__delete-btn']}
            onClick={() => handleDeleteTodoPermanently()}
          >
            Delete Todo Permanently <MdDeleteForever />
          </button>
        ) : (
          <button
            className={styles['todo-item__delete-btn']}
            onClick={() => handleDeleteTodo()}
          >
            Delete Todo <MdDeleteForever />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
