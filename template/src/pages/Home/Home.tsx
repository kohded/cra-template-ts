import React, { FC } from 'react';
import { useCounter, UseCounter } from '../../redux/counter/use-counter';

const Home: FC = () => {
  const { counter, handleDecrementClick, handleIncrementClick }: UseCounter = useCounter();

  return (
    <>
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

export default Home;
