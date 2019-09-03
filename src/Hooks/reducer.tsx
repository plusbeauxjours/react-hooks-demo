import { useReducer, useState } from "react";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const ADD = "add";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const initialCounterState = {
  count: 0
};
const intialToDoState = {
  toDos: []
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterReducer = (
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

export const toDoReducer = (
  state: any,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };
    default:
      return;
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const useCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);
  return { state, dispatch };
};
export const useToDo = () => {
  const [state, dispatch] = useReducer(toDoReducer, intialToDoState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
  };
  const onChange = (e: any) => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };
  return { state, newToDo, onSubmit, onChange };
};
