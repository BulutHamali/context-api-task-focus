import { TodoProvider } from './TodoContext';
import { FilterProvider } from './FilterContext';
import { ThemeProvider } from './ThemeContext';

export const AppProviders = ({ children }) => (
  <ThemeProvider>
    <TodoProvider>
      <FilterProvider>{children}</FilterProvider>
    </TodoProvider>
  </ThemeProvider>
);
