import React from "react";
import styled from "styled-components";
import { useToDo } from "../Hooks/reducer";

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
const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
const Form = styled.form`
  margin-top: 10px;
`;
const Input = styled.input``;
const Delete = styled.span`
  cursor: pointer;
`;

const ToDos = () => {
  const { state, newToDo, onSubmit, onDelete, onChange } = useToDo();
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
          state.toDos.map((toDo: any) => (
            <Item key={toDo.id}>
              {toDo.text} <Delete onClick={() => onDelete(toDo.id)}>❌</Delete>
            </Item>
          ))}
      </List>
    </Container>
  );
};

export default ToDos;
