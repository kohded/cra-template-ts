import Routes from 'components/Routes/Routes';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
