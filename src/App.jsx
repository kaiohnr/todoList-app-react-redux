import AddTodoForm from './features/todos/addTodoForm';
import TodosList from './features/todos/TodosList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <AddTodoForm />
      <TodosList />
    </div>
  );
};

export default App;
