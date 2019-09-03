import React, { useReducer } from "react";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";

const initialState = {
  count: 0
};

export const reducer = (
  state: any,
  action: {
    type: string;
  }
) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

export const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
