import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { App } from './App';

test('count text is in document', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(
    await waitFor(() => screen.getByText(/Dexie Count \(Persistent\): 0/))
  ).toBeInTheDocument();
  expect(await waitFor(() => screen.getByText(/Redux Count: 0/))).toBeInTheDocument();
});
