import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import { Layout } from '../Layout/Layout';
import { Routes } from '../Routes/Routes';

export const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </Provider>
);
