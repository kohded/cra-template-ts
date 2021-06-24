import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';
import { actionEvent } from '../common/utils';

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
const DECREMENTED = 'counter/decremented';
const INCREMENTED = 'counter/incremented';

// Epic
const counterEpic = (action$: Observable<AnyAction>): Observable<AnyAction> =>
  action$.pipe(ofType(DECREMENTED), delay(500), mapTo(actionEvent(INCREMENTED)));

// Reducer
const counterInitialState = { count: 0 };
const counterReducer = (
  state: Counter = counterInitialState,
  action: ActionEvent & Counter
): Counter => {
  switch (action.type) {
    case DECREMENTED:
      return { count: state.count - 1 };
    case INCREMENTED:
      return { count: state.count + 1 };
    default:
      return counterInitialState;
  }
};

// Hook
const useCounter = (): UseCounter => {
  const counter = useSelector((state: RootStateOrAny) => state.counter);
  const dispatch = useDispatch();

  const handleDecrementClick = (): void => {
    dispatch(actionEvent(DECREMENTED));
  };

  const handleIncrementClick = (): void => {
    dispatch(actionEvent(INCREMENTED));
  };

  return { counter, handleDecrementClick, handleIncrementClick };
};

export { counterEpic, counterReducer, useCounter };
