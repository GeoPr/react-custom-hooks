import { useEffect, useState } from 'react';

export const useTheme = () => {
  const defaultDarkTheme = 'dark';
  const lightTheme = 'light';

  const [theme, setTheme] = useState(defaultDarkTheme);

  const updateLS = () => localStorage.setItem('theme', theme);

  const toggleTheme = () => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme === 'dark') setTheme(lightTheme);
    else setTheme(defaultDarkTheme);
  };

  useEffect(updateLS, [theme]);

  return { theme, toggleTheme };
};
