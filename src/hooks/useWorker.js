import { useEffect, useRef, useState } from 'react';

const workerHandler = fn => {
  onmessage = e => {
    postMessage(fn(e.data));
  };
};

export const useWorker = fn => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const workerRef = useRef(null);

  useEffect(() => {
    workerRef.current = new Worker(
      URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`])),
    );

    workerRef.current.onmessage = ({ data }) => {
      setResult(data);
    };
    workerRef.current.onerror = ({ message }) => {
      setError(message);
    };

    return () => {
      workerRef.current.terminate();
    };
  }, [fn]);

  return {
    error,
    result,
    run: value => workerRef.current.postMessage(value),
  };
};
