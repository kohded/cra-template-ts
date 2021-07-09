import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { counterInitialState } from '../../store/counter';
import { App } from './App';

const mockStore = configureStore();

test('count text is in document', async () => {
  render(
    <Provider store={mockStore({ counter: counterInitialState })}>
      <App />
    </Provider>
  );
  const counter = await waitFor(() => screen.getByText(/Count: 0/));
  expect(counter).toBeInTheDocument();
});
