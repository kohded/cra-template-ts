import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore();

test('counter text is in document', () => {
  const { getByText } = render(
    <Provider store={mockStore({ counter: 0 })}>
      <App />
    </Provider>
  );
  const text = getByText(/Counter: 0/i);

  expect(text).toBeInTheDocument();
});
