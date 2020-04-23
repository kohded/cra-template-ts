import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from 'redux/counter/counter';

export default (): {
  counter: number;
  handleDecrementClick: () => void;
  handleIncrementClick: () => void;
} => {
  const counter = useSelector((state: { counter: number }) => state.counter);
  const dispatch = useDispatch();

  const handleDecrementClick = (): void => {
    dispatch(decrementCount());
  };

  const handleIncrementClick = (): void => {
    dispatch(incrementCount());
  };

  return { counter, handleDecrementClick, handleIncrementClick };
};
