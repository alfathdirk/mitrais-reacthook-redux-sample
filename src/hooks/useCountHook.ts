import { useReducer, useEffect } from "react";

type Action =
    | { type: 'increment'}
    | { type: 'decrement'}
    | { type: 'reset' }
    | { type: 'customNumber', payload: number };

interface initialStateProps {
  count: number;
}


const reducer = (state: initialStateProps, action: Action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "customNumber":
      return { ...state, count: action.payload || 0 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export const useCountHook = () => {
  const initialState: initialStateProps = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  }
}

