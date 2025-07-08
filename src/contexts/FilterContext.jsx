import { createContext, useState } from 'react';

const FilterContext = createContext({
  filter: 'all',
  setFilter: () => {},
});

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState('all');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext };
