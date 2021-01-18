import React from 'react';
import { useFetch } from '../hooks/useFetch';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const UseFetchComponent = () => {
  const { data, loading, error, refetch } = useFetch(`${url}?_limit=5`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (loading) return <span className="loading">Loading...</span>;
  if (error) alert('somethig went wrong');

  return (
    <div>
      <button onClick={() => refetch(`${url}?_limit=6`)}>Refecth</button>
      <ul>
        {data &&
          data.map(({ id, title }) => {
            return (
              <li key={id} className="item">
                {title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
