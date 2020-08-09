import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { PageNotFound } from '../../pages/PageNotFound/PageNotFound';

export const Routes: React.FC = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={PageNotFound} />
  </Switch>
);
