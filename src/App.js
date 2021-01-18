import { UseFetchComponent } from './components/UseFetchComponent';
import { UseInputComponent } from './components/UseInputComponent';
import { useTheme } from './hooks/useTheme';
import './App.css';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`wrapper ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <UseInputComponent />
      <UseFetchComponent />
    </div>
  );
};

export default App;
