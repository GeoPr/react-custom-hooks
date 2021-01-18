import React from 'react';
import { useInput } from '../hooks/useInput';

export const UseInputComponent = () => {
  const { value, onChange, onBlur, onBlurError } = useInput('', true);
  const { onBlurError: error, ...inp } = useInput();

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          onBlur={() => onBlur('This is a required field')}
        />
        {onBlurError && <span className="error">{onBlurError}</span>}
      </div>
      <input type="text" {...inp} />
    </>
  );
};
