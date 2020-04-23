import React from 'react';
import useCounter from 'redux/counter/hooks';

const Home: React.FC = () => {
  const { counter, handleDecrementClick, handleIncrementClick } = useCounter();

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
