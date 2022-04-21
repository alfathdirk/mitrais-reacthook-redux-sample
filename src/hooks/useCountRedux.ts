import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import  { increment, decrement, customNumber } from "../reducers/counter";

export const useCountRedux = () => {

  const count = useSelector<any>(state => state.counter.value);
  const dispatch = useDispatch()

  const reduxIncrement = () => {
    dispatch(increment());
  };

  const reduxDecrement = () => {
    dispatch(decrement());
  };

  const addCustomNumber = (number: number) => {
    dispatch(customNumber(number));
  };


  return {
    reduxIncrement,
    reduxDecrement,
    count,
    addCustomNumber,
  }
}
