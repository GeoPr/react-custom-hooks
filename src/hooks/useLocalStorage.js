import { useState, useEffect } from 'react';

export const useLocalStorage = (initalValue, localStorageKey) => {
  const localStorageProperties = localStorage.getItem(localStorageKey + '');
  const parsedProperties = JSON.parse(localStorageProperties);

  const [properties, setProperties] = useState(
    parsedProperties || `${initalValue}`,
  );

  const updateLocalStorage = () => {
    localStorage.setItem(localStorageKey, JSON.stringify(properties));
  };

  useEffect(updateLocalStorage, [properties]);

  return [properties, setProperties];
};
