import React, { useState } from 'react';
import { useWorker } from '../hooks/useWorker';

function getFibNumber(n) {
  return n <= 1 ? n : getFibNumber(n - 1) + getFibNumber(n - 2);
}

export const UseWorkerComponent = () => {
  const [num, setNum] = useState(0);
  const { result, error, run } = useWorker(getFibNumber);

  error && alert(error);

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={e => setNum(e.target.value)}
        min={1}
      />
      <button onClick={() => run(num)}>click</button>
      {result}
    </div>
  );
};
