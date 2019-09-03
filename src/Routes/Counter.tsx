import React from "react";
import styled from "styled-components";
import { useCounter, INCREMENT, DECREMENT } from "../Hooks/reducer";

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

const Counter = () => {
  const { state, dispatch } = useCounter();
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

export default Counter;
