import React from 'react';
import { Page } from '../../components/Page/Page';
import { useCounter } from '../../store/counter';

export const Home = (): JSX.Element => {
  const { counter, handleDecrementClick, handleIncrementClick } = useCounter();
  const homeText = 'Home';

  return (
    <Page description={homeText} keywords={homeText} title={homeText}>
      <p>Count: {counter.count}</p>
      <button onClick={handleDecrementClick} type="button">
        -
      </button>
      <button onClick={handleIncrementClick} type="button">
        +
      </button>
    </Page>
  );
};
