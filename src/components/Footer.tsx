import React from "react";
import styled from "styled-components";
import { useMode, useResult } from "../context";
import { Button } from "../styles/SharedComponents";
import { Dispatcher } from "../types";

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  setModal: Dispatcher<boolean>;
}

const Footer: React.FC<Props> = ({ setModal }) => {
  const { mode, handleClick } = useMode();
  const { loading } = useResult();

  return (
    <Container>
      <Button
        onClick={handleClick}
        title={`Switch to ${mode === "Normal" ? "Advanced" : "Normal"} Mode`}
        disabled={loading}
      >
        {mode === "Normal" ? "Advanced" : "Normal"} Mode
      </Button>
      <Button onClick={() => setModal(true)} disabled={loading}>
        Rules
      </Button>
    </Container>
  );
};

export default Footer;
