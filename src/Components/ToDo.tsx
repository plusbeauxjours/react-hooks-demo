import React from "react";
import styled from "styled-components";
import { useDispatch } from "../Context/context";
import { COMPLETE, UNCOMPLETE, DELETE } from "../actions";

const Container = styled.li`
  display: flex;
  margin: 14px 0;
  display: flex;
  width: 400px;
  justify-content: space-between;
  border-bottom: solid 1px grey;
  text-align: center;
`;

const ItemContainer = styled.div`
  display: flex;
`;

const Item = styled.span`
  display: flex;
  align-self: center;
  cursor: pointer;
`;

interface IProps {
  text: string;
  id: string;
  isCompleted?: boolean;
}

const ToDo: React.FC<IProps> = ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Item>{text}</Item>
      <ItemContainer>
        <Item
          role="img"
          aria-label=""
          onClick={() => dispatch({ type: DELETE, payload: id })}
        >
          ❌
        </Item>
        <Item
          role="img"
          aria-label=""
          onClick={() =>
            dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
          }
        >
          {isCompleted ? " 🙅🏼‍♂️" : "✅"}
        </Item>
      </ItemContainer>
    </Container>
  );
};

export default ToDo;
