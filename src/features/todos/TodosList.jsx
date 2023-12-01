import { useSelector } from 'react-redux';
import styles from './TodosList.module.css';
import TodoItem from './TodoItem';
import FilterTodos from './FilterTodos';

const TodosList = () => {
  const allTodos = useSelector((state) => state.todos);
  const { filter } = useSelector((state) => state.filter);

  const completedTodos = allTodos.filter((todo) => todo.completed === true);
  const uncompletedTodos = allTodos.filter((todo) => todo.completed === false);

  return (
    <div className={styles['todos-container']}>
      <div className={styles['todos-container__list']}>
        <FilterTodos />
        <ul>
          {filter === 'all' &&
            allTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </ul>
        <ul>
          {filter === 'completed' &&
            completedTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </ul>
        <ul>
          {filter === 'uncompleted' &&
            uncompletedTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </ul>
      </div>
    </div>
  );
};

export default TodosList;
