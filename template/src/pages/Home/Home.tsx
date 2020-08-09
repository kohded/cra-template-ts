import React from 'react';
import { useCounter } from '../../redux/counter/useCounter';
import { APP_NAME } from '../../utils/constants';

export const Home: React.FC = () => {
  const { counter, handleDecrementClick, handleIncrementClick } = useCounter();

  return (
    <>
      <p>{APP_NAME}</p>
      <p>Counter: {counter}</p>
      <button onClick={handleDecrementClick} type="button">
        -
      </button>
      <button onClick={handleIncrementClick} type="button">
        +
      </button>
    </>
  );
};
