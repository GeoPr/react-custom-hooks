import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const UseLocalStorageComponent = () => {
  const [count, setCount] = useLocalStorage(21, 'count');

  const increment = () => setCount(prev => prev + 1);

  const decrement = () => setCount(prev => prev - 1);

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};
