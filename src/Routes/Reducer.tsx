import React from "react";
import styled from "styled-components";
import { useCounter, INCREMENT, DECREMENT } from "../Hooks/counter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const Btn = styled.button`
  margin-top: 10px;
`;

const Counter = () => {
  const { state, dispatch } = useCounter();
  return (
    <Container>
      {state.count}
      <Btn onClick={() => dispatch({ type: INCREMENT })}>add</Btn>
      <Btn onClick={() => dispatch({ type: DECREMENT })}>remove</Btn>
    </Container>
  );
};

export default Counter;
