import { enableAllPlugins } from 'immer';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import { App } from './components/App/App';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

enableAllPlugins();

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
