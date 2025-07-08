import { ThemeProvider } from './contexts/ThemeContext';
import { AppProviders } from './contexts/AppProviders';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { useTheme } from './contexts/useTheme';
import './index.css';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center min-h-screen bg-white dark:bg-teal-900 text-black dark:text-white p-6 transition-colors relative">
      <div
        className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl w-full p-6 rounded shadow-md ${
          theme === "light"
            ? "bg-gray-50 text-gray-800"
            : "bg-gray-800 text-white"
        }`}
      >
        <h1
          className="
  text-3xl md:text-4xl font-bold text-center mb-6 tracking-tight 
  text-gray-900 bg-white shadow 
  dark:text-yellow-300 dark:bg-gray-800 dark:tracking-wide dark:font-extrabold dark:shadow-lg
"
        >
          🗂️ TaskFocus
        </h1>

        <ThemeToggleButton />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppProviders>
      <AppContent />
    </AppProviders>
  </ThemeProvider>
);

export default App;
