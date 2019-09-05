import React, { useRef } from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import useTabs from "../Hooks/useTabs";
import { content } from "../Hooks/useTabs";
import useTitle from "../Hooks/useTitle ";
import useClick from "../Hooks/useClick";
import useConfirm from "../Hooks/useConfirm";
import usePreventLeave from "../Hooks/usePreventLeave";
import useBeforeLeave from "../Hooks/useBeforeLeave";
import useFadeIn from "../Hooks/useFadeIn";

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

  const begForLife = () => console.log("Plz dont leave");

  const fadeInH11 = useFadeIn(1, 2);

  return (
    <Container>
      <Bold>useInput</Bold>
      <input placeholder="Name" {...name.props} />
      <BtnContainer>
        {content.map((section, index) => (
          <Btn key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </Btn>
        ))}
      </BtnContainer>
      <div>{currentItem.content}</div>

      <Bold>useTitle</Bold>
      <p>Title will be changed in 1sec</p>

      <Bold>useClick</Bold>
      <p>Console.log when it's clicked</p>
      <Btn ref={title}>useClick</Btn>

      <Bold>useConfirm</Bold>
      <Btn onClick={useConfirmDelete}>useConfirmDelete</Btn>

      <Bold>usePreventLeave</Bold>
      <Btn onClick={enablePrevent}>Protect</Btn>
      <Btn onClick={disablePrevent}>Unprotect</Btn>

      <Bold>useBeforeLeave</Bold>
      {useBeforeLeave(begForLife)}

      <Bold {...fadeInH11}>useFadeIn</Bold>
    </Container>
  );
};

export default Effect;
