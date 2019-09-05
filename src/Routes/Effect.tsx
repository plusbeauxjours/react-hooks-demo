import React, { useRef } from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import useTabs from "../Hooks/useTabs";
import { content } from "../Hooks/useTabs";
import useTitle from "../Hooks/useTitle ";
import useClick from "../Hooks/useClick";
import useConfirm from "../Hooks/useConfirm";
import usePreventLeave from "../Hooks/usePreventLeave";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;
const Btn = styled.button``;
const Bold = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 10px;
`;

const Effect = () => {
  const noAt = (value: any) => !value.includes("@");
  const name = useInput("Mr.", noAt);

  const { currentItem, changeItem } = useTabs(0, content);

  const titleUpdater = useTitle("Loading...");

  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  const deleteWorld = () => console.log("deleting the world");
  const abort = () => console.log("aborted");
  const useConfirmDelete = useConfirm("are you sure", deleteWorld, abort);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <Container>
      {/* ///////////////////////////////////////////////////////useInput */}
      <Bold>useInput</Bold>
      <input placeholder="Name" {...name} />
      <BtnContainer>
        {content.map((section, index) => (
          <Btn key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </Btn>
        ))}
      </BtnContainer>
      <div>{currentItem.content}</div>

      {/* ///////////////////////////////////////////////////////useTitle */}
      <Bold>useTitle</Bold>
      <p>Title will be changed in 1sec</p>

      {/* ///////////////////////////////////////////////////////useClick */}
      <Bold>useClick</Bold>
      <Btn ref={title}>useClick</Btn>

      {/* ///////////////////////////////////////////////////////useConfirm */}
      <Bold>useConfirm</Bold>
      <Btn onClick={useConfirmDelete}>useConfirmDelete</Btn>

      {/* ///////////////////////////////////////////////////////usePreventLeave */}
      <Bold>usePreventLeave</Bold>
      <Btn onClick={enablePrevent}>Protect</Btn>
      <Btn onClick={disablePrevent}>Unprotect</Btn>
    </Container>
  );
};

export default Effect;
