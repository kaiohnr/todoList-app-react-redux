import { useSelector } from 'react-redux';
import styles from './TodosList.module.css';
import TodoItem from './TodoItem';

const TodosList = () => {
  const allTodos = useSelector((state) => state.todos);

  return (
    <div className={styles['todos-container']}>
      <div className={styles['todos-container__list']}>
        <ul>
          {allTodos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodosList;
