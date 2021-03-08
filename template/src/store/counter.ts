import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
import { actionEvent } from '../common/utils';

// Types
interface Counter {
  counter: number;
}

interface CounterAction extends Counter {
  type: string;
}

interface UseCounter {
  counter: number;
  handleDecrementClick: () => void;
  handleIncrementClick: () => void;
}

// Action Types
const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

// Epic
const counterEpic = (action$: AnyAction): void =>
  action$.pipe(ofType(DECREMENT), delay(1000), mapTo(actionEvent(INCREMENT)));

// Hook
const useCounter = (): UseCounter => {
  const counter = useSelector((state: Counter) => state.counter);
  const dispatch = useDispatch();

  const handleDecrementClick = (): void => {
    dispatch(actionEvent(DECREMENT));
  };

  const handleIncrementClick = (): void => {
    dispatch(actionEvent(INCREMENT));
  };

  return { counter, handleDecrementClick, handleIncrementClick };
};

// Reducer
const counterReducer = (state = 0, action: CounterAction): number => {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export { counterEpic, counterReducer, useCounter };
export type { UseCounter };
