import { useDispatch, useSelector } from 'react-redux';
import {
  showAllTodos,
  showCompletedTodos,
  showUncompletedTodos,
  showDeletedTodos,
} from './FilterTodoSlice';
import styles from './FilterTodos.module.css';
import { IoTrashBin } from 'react-icons/io5';

const FilterTodos = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((store) => store.filter);
  const todosBin = useSelector((store) => store.todosBin);

  const showAll = () => {
    dispatch(showAllTodos());
  };

  const showCompleted = () => {
    dispatch(showCompletedTodos());
  };

  const showUncompleted = () => {
    dispatch(showUncompletedTodos());
  };

  const showDeleted = () => {
    dispatch(showDeletedTodos());
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

      {todosBin.length >= 1 && (
        <div
          className={` ${styles['filter-option__bin']} ${
            filter === 'deleted' ? styles['active-bin'] : ''
          } `}
        >
          <p onClick={showDeleted}>
            Deleted Todos{' '}
            <span className={styles['bin-count']}>
              {todosBin ? todosBin.length : null}
            </span>
          </p>
          <IoTrashBin />
        </div>
      )}
    </div>
  );
};

export default FilterTodos;
