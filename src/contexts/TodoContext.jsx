import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext(undefined);

function todoReducer(todos, action) {
  switch (action.type) {
    case 'ADD':
      return [...todos, { id: Date.now(), text: action.text || '', completed: false }];
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE':
      return todos.filter(todo => todo.id !== action.id);
    case 'EDIT':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, text: action.newText || '' } : todo
      );
    case 'CLEAR_COMPLETED':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('tasknest.todos', []);

  const dispatch = (action) => {
    const updated = todoReducer(todos, action);
    setTodos(updated);
  };

  const addTodo = (text) => dispatch({ type: 'ADD', text });
  const toggleTodo = (id) => dispatch({ type: 'TOGGLE', id });
  const deleteTodo = (id) => dispatch({ type: 'DELETE', id });
  const editTodo = (id, newText) => dispatch({ type: 'EDIT', id, newText });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext };
