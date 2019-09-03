import React, { useReducer, useState } from "react";
import styled from "styled-components";
import {
  initialState,
  reducer,
  ADD,
  COMPLETE,
  UNCOMPLETE,
  DELETE
} from "../Reducer/toDosReducer";

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
  width: 400px;
  justify-content: space-between;
  margin: 5px 0;
`;

const Form = styled.form`
  margin-top: 10px;
`;

const Input = styled.input``;

const BtnContainer = styled.div``;
const Btn = styled.span`
  cursor: pointer;
`;

const ToDos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (newToDo !== "") {
      dispatch({ type: ADD, payload: newToDo });
      setNewToDo("");
    }
  };
  const onChange = (e: any) => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };
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
      {state.toDos.length !== 0 && (
        <List>
          To Dos
          {state &&
            state.toDos.map((toDo: any) => (
              <Item key={toDo.id}>
                {toDo.text}{" "}
                <BtnContainer>
                  <Btn
                    role="img"
                    aria-label=""
                    onClick={() => dispatch({ type: DELETE, payload: toDo.id })}
                  >
                    ❌
                  </Btn>
                  <Btn
                    role="img"
                    aria-label=""
                    onClick={() =>
                      dispatch({ type: COMPLETE, payload: toDo.id })
                    }
                  >
                    ✅
                  </Btn>
                </BtnContainer>
              </Item>
            ))}
        </List>
      )}
      {state.completed.length !== 0 && (
        <List>
          Completed
          {state.completed.map((toDo: any) => (
            <Item key={toDo.id}>
              {toDo.text}{" "}
              <BtnContainer>
                <Btn
                  role="img"
                  aria-label=""
                  onClick={() => dispatch({ type: DELETE, payload: toDo.id })}
                >
                  ❌
                </Btn>
                <Btn
                  role="img"
                  aria-label=""
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  🙅🏼‍♂️
                </Btn>
              </BtnContainer>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
};

export default ToDos;
