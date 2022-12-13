import React from "react";
import styled from "styled-components";
import { useMode } from "../context";
import { Dispatcher } from "../types";

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 1rem 2.5rem;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 3);
    height: fit-content;
    margin: 0 auto;
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 10px;
    row-gap: 2.5rem;
    padding: 2rem 2.5rem 2.75rem;
  }
`;

const Title = styled.h1`
  color: var(--dark);
`;

const Image = styled.img`
  width: calc(var(--mobile) / 1.25);

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: calc(var(--tablet) / 1.75);
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 4.25);
    margin: 0 auto;
    order: 3;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    order: 2;
  }
`;

interface Props {
  modal: boolean;
  setModal: Dispatcher<boolean>;
}

const Modal: React.FC<Props> = ({ modal, setModal }) => {
  const { mode } = useMode();

  if (!modal) return null;

  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <Wrapper>
      <Container>
        <Title>Rules</Title>
        <Image
          src={`/assets/${mode === "Normal" ? "image-rules" : "image-rules-bonus"}.svg`}
          alt="Image rules"
        />
        <Button onClick={modalHandler}>
          <img src="/assets/icon-close.svg" />
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Modal;
