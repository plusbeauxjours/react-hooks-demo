import React from "react";
import styled from "styled-components";
import { useReducer } from "react";
import { INCREMENT, DECREMENT } from "../actions";
import { initialState, reducer } from "../Reducer/counterReducer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const Item = styled.div`
  margin-top: 10px;
`;
const Btn = styled.button``;

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      {state.count}
      <Item>
        <Btn onClick={() => dispatch({ type: INCREMENT })}>ADD</Btn>
        <Btn onClick={() => dispatch({ type: DECREMENT })}>REMOVE</Btn>
      </Item>
    </Container>
  );
};

export default Reducer;
