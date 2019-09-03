import React from "react";
import styled from "styled-components";
import { useCounter, INCREMENT, DECREMENT, useToDo } from "../Hooks/reducer";
import { ToolbarAndroidBase } from "react-native";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;
const List = styled.ul`
  margin-top: 10px;
`;
const Item = styled.li``;
const Form = styled.form`
  margin-top: 10px;
`;
const Input = styled.input``;

const ToDos = () => {
  const { state, newToDo, onSubmit, onChange } = useToDo();
  return (
    <Container>
      Add to do
      <Form onSubmit={onSubmit}>
        <Input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </Form>
      <List>
        To Dos
        {state &&
          state.toDos.map((toDo, index) => (
            <Item key={index}>{toDo.text}</Item>
          ))}
      </List>
    </Container>
  );
};

export default ToDos;
