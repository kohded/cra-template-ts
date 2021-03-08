import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { Action, applyMiddleware, combineReducers, createStore, Store, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware, Epic, EpicMiddleware } from 'redux-observable';
import { counterEpic, counterReducer } from './counter';

const rootReducer = combineReducers({ counter: counterReducer });
const rootEpic: unknown = combineEpics(counterEpic);
const epicMiddleware: EpicMiddleware<Action> = createEpicMiddleware();
const middleware = [epicMiddleware];
const composeEnhancers = composeWithDevTools({
  trace: true,
});
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
    offline(offlineConfig) as StoreEnhancer<
      Store<{ [key: string]: unknown }>,
      Record<string, unknown>
    >
  )
);

epicMiddleware.run(rootEpic as Epic<Action, Action, void, unknown>);

export { store };
