import { useSelector } from 'react-redux';
import styles from './TodosList.module.css';
import TodoItem from './TodoItem';
import FilterTodos from './FilterTodos';
import TodosPagination from './TodosPagination';
import { useState } from 'react';

const TodosList = () => {
  const allTodos = useSelector((state) => state.todos);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(6);

  const { filter } = useSelector((state) => state.filter);

  const deletedTodos = useSelector((state) => state.todosBin);
  const completedTodos = allTodos.filter((todo) => todo.completed === true);
  const uncompletedTodos = allTodos.filter((todo) => todo.completed === false);

  const indexOfLastTodo = currentPage * todosPerPage; // 9
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage; // 0
  const currentTodo = allTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className={styles['todos-container']}>
      <div className={styles['todos-container__list']}>
        <FilterTodos />
        <ul>
          {filter === 'all' &&
            currentTodo.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </ul>
        <ul>
          {filter === 'completed' &&
            completedTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </ul>
        <ul>
          {filter === 'uncompleted' &&
            uncompletedTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </ul>
        <ul>
          {filter === 'deleted' &&
            deletedTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </ul>
      </div>
      <TodosPagination
        todosPerPage={todosPerPage}
        totalTodos={allTodos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TodosList;
