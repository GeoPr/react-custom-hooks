import { useState } from 'react';

export const useInput = (defaultValue = '', isRequired = false) => {
  const [value, setValue] = useState(defaultValue);
  const [onBlurError, setOnBlurError] = useState('');

  return {
    value,
    onChange: e => setValue(e.target.value),
    onBlurError,
    onBlur(message) {
      if (isRequired && !value.trim()) {
        setOnBlurError(message);
      } else setOnBlurError('');
    },
  };
};
