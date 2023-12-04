import styles from './TodosPagination.module.css';

const TodosPagination = ({ todosPerPage, totalTodos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles['pagination-container']}>
      {pageNumbers.map((number) => (
        <p
          key={number}
          onClick={() => paginate(number)}
          className={`${currentPage === number ? styles['page-active'] : ''}`}
        >
          {number}
        </p>
      ))}
    </div>
  );
};

export default TodosPagination;
