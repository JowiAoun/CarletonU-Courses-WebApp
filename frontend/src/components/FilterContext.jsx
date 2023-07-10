// FilterContext.js
import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState({
    inPerson: false,
    online: false,
    summer: false,
    fall: false,
    winter: false,
    firstYear: false,
    secondYear: false,
    thirdYear: false,
    fourthYear: false,
  });

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <FilterContext.Provider value={{ inputValue, handleInputChange }}>
      {children}
    </FilterContext.Provider>
  );
};
