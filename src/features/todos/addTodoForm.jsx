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

  let now = new Date();

  let isMorning = now.getHours() > 5 && now.getHours() <= 12;
  let isAfternoon = now.getHours() > 12 && now.getHours() <= 18;
  let isEvening = now.getHours() > 18 && now.getHours() <= 22;
  let isNight = now.getHours() > 22 || now.getHours() <= 5;

  const times = {
    Morning: isMorning,
    Afternoon: isAfternoon,
    Evening: isEvening,
    Night: isNight,
  };

  const keysInObj = Object.keys(times);

  const getCurrentTime = keysInObj.filter(function (key) {
    return times[key];
  });

  return (
    <div className={styles['container']}>
      <h1>Good {getCurrentTime[0]}, Unknown User. What about write a new todo?</h1>
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
