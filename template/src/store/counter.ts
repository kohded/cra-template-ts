import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ofType } from 'redux-observable';
import { ignoreElements, Observable, tap } from 'rxjs';
import { ActionEvent, actionEvent } from './helpers';

// Types
interface Counter {
  count: number;
}

interface UseCounter {
  counter: Counter;
  handleDecrementClick: () => void;
  handleIncrementClick: () => void;
}

// Action Types
export const counterActionTypes = {
  decremented: 'counter/decremented',
  incremented: 'counter/incremented',
};

// Epic
export const counterEpic = (action$: Observable<AnyAction>): Observable<AnyAction> =>
  action$.pipe(
    ofType(counterActionTypes.decremented, counterActionTypes.incremented),
    // eslint-disable-next-line no-console
    tap((action: ActionEvent) => console.log(`Epic: ${action.type}`)),
    ignoreElements()
  );

// Reducer
export const counterInitialState = { count: 0 };
export const counterReducer = (
  state: Counter = counterInitialState,
  action: ActionEvent & Counter
): Counter => {
  switch (action.type) {
    case counterActionTypes.decremented:
      return { count: state.count - 1 };
    case counterActionTypes.incremented:
      return { count: state.count + 1 };
    default:
      return counterInitialState;
  }
};

// Hook
export const useCounter = (): UseCounter => {
  const counter = useSelector((state: RootStateOrAny) => state.counter);
  const dispatch = useDispatch();

  return {
    counter,
    handleDecrementClick: () => dispatch(actionEvent(counterActionTypes.decremented)),
    handleIncrementClick: () => dispatch(actionEvent(counterActionTypes.incremented)),
  };
};
