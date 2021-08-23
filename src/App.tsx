import React from 'react';
import './App.css';
import { useState, createContext, useContext } from 'react'; 

// Define a context
const MyContext = createContext({
  count: 0,
});

// Top level component
const App = () => {
  // Local state of the counter
  const [count, setCount] = useState(0);
  // Function tyhat uodates the counter value
  const handleAddCount = () => {
    setCount((prevCounter) => prevCounter + 1);
  };
  return (
    <MyContext.Provider value={{ count }}>
      <button onClick={handleAddCount}>Add Count</button>
      <ChildComponent />
    </MyContext.Provider>
  );
};

// Child component that belongs to the top level component
const ChildComponent = () => {
  // Use useContext and get parents component state
  const { count } = useContext(MyContext);
  return <p>The count value is {count}</p>;
};

export default App;
