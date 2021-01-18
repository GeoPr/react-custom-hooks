import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [state, setState] = useState({
    data: null,
    error: false,
    loading: false,
  });

  const fetchData = async (u = url, o = options) => {
    try {
      setState(prev => ({ ...prev, loading: true }));

      const response = await fetch(u, o);
      const data = await response.json();

      setState(prev => ({
        ...prev,
        data,
        error: false,
        loading: false,
      }));
    } catch (e) {
      setState(prev => ({
        ...prev,
        data: null,
        loading: false,
        error: true,
      }));
    }
  };

  useEffect(() => fetchData(), []);

  return { ...state, refetch: fetchData };
};
