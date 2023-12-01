import { FaCheck } from 'react-icons/fa';
import styles from './addTodoForm.module.css';
import { addTodo, editTodoTitle } from './todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { editTitle, clearValues } from './todoTitleSlice';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const { todoTitle } = useSelector((store) => store.todoTitle);
  const todos = useSelector((store) => store.todos);
  const getEditingTodo = todos.find((todo) => todo.isEditing);

  const handleTitleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(editTitle({ name, value }));
  };

  const canCreateTodo = todoTitle === '';

  function handleCreateTodo() {
    if (getEditingTodo && getEditingTodo.isEditing) {
      dispatch(editTodoTitle({ newTitle: todoTitle, editingTodoId: getEditingTodo.id }));
      dispatch(clearValues());
      return;
    }

    dispatch(
      addTodo({
        title: todoTitle,
      })
    );
    dispatch(clearValues());
  }

  return (
    <div className={styles['container']}>
      <div className={styles['form-container']}>
        <input
          autoCapitalize="true"
          name="todoTitle"
          onChange={(e) => handleTitleChange(e)}
          autoFocus
          value={todoTitle}
          className={styles['form-container__input']}
          type="text"
          placeholder="Write a todo"
        />
        <button
          disabled={canCreateTodo}
          className={styles['form-container__button']}
          onClick={() => handleCreateTodo()}
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
