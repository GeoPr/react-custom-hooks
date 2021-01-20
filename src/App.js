import { UseFetchComponent } from './components/UseFetchComponent';
import { UseInputComponent } from './components/UseInputComponent';
import { useTheme } from './hooks/useTheme';
import { UseLocalStorageComponent } from './components/UseLocalStorageComponent';
import './App.css';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`wrapper ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <UseInputComponent />
      <UseFetchComponent />
      <UseLocalStorageComponent />
    </div>
  );
};

export default App;
