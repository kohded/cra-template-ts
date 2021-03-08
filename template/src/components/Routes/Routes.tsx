import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { lazyComponent } from '../../common/utils';

const Home = lazyComponent('Home', import('../../pages/Home/Home'));
const PageNotFound = lazyComponent('PageNotFound', import('../../pages/PageNotFound/PageNotFound'));

export const Routes: FC = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={PageNotFound} />
  </Switch>
);
