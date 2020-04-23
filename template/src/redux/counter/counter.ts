import { Dispatch } from 'redux';

interface State {
  counter: number;
}

export const DECREMENT = 'DECREMENT ';
export const INCREMENT = 'INCREMENT';

export const decrementCount = () => (dispatch: Dispatch, getState: () => State): void => {
  dispatch({
    counter: getState().counter - 1,
    type: DECREMENT,
  });
};

export const incrementCount = () => (dispatch: Dispatch, getState: () => State): void => {
  dispatch({
    counter: getState().counter + 1,
    type: INCREMENT,
  });
};

export default (state = 0, action: { counter: number; type: string }): number => {
  switch (action.type) {
    case DECREMENT:
    case INCREMENT:
      return action.counter;
    default:
      return state;
  }
};
