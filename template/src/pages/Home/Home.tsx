import React, { FC } from 'react';
import { Page } from '../../components/Page/Page';
import { useCounter, UseCounter } from '../../store/counter';

export const Home: FC = () => {
  const { counter, handleDecrementClick, handleIncrementClick }: UseCounter = useCounter();

  return (
    <Page metaDescriptionContent="Home" title="Home">
      <p>Positive Counter: {counter}</p>
      <button onClick={handleDecrementClick} type="button">
        -
      </button>
      <button onClick={handleIncrementClick} type="button">
        +
      </button>
    </Page>
  );
};
