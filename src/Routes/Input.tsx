import React from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import useTabs from "../Hooks/useTabs";
import { content } from "../Hooks/useTabs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const BtnContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;
const Btn = styled.button``;

const Input = () => {
  const noAt = (value: any) => !value.includes("@");
  const name = useInput("Mr.", noAt);
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <Container>
      <input placeholder="Name" {...name} />
      <BtnContainer>
        {content.map((section, index) => (
          <Btn key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </Btn>
        ))}
      </BtnContainer>
      <div>{currentItem.content}</div>
    </Container>
  );
};

export default Input;
