import { useDispatch, useSelector } from 'react-redux';
import {
  showAllTodos,
  showCompletedTodos,
  showUncompletedTodos,
} from './FilterTodoSlice';
import styles from './FilterTodos.module.css';

const FilterTodos = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((store) => store.filter);

  const showAll = () => {
    dispatch(showAllTodos());
  };

  const showCompleted = () => {
    dispatch(showCompletedTodos());
  };

  const showUncompleted = () => {
    dispatch(showUncompletedTodos());
  };

  return (
    <div className={styles['filters-container']}>
      <div
        className={`${styles['filter-option']} ${
          filter === 'all' ? styles['active'] : ''
        }`}
      >
        <p onClick={showAll}>All</p>
      </div>

      <div
        className={`${styles['filter-option']} ${
          filter === 'completed' ? styles['active'] : ''
        }`}
      >
        <p onClick={showCompleted}>Completed</p>
      </div>

      <div
        className={`${styles['filter-option']} ${
          filter === 'uncompleted' ? styles['active'] : ''
        }`}
      >
        <p onClick={showUncompleted}>Uncompleted</p>
      </div>
    </div>
  );
};

export default FilterTodos;
